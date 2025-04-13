// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract OPToken {
    string public name = "Optimism Token";
    string public symbol = "OP";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function transfer(address to, uint256 value) external returns (bool) {
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }

    function approve(address spender, uint256 value) external returns (bool) {
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) external returns (bool) {
        require(allowance[from][msg.sender] >= value, "Allowance exceeded");
        allowance[from][msg.sender] -= value;
        balanceOf[from] -= value;
        balanceOf[to] += value;
        emit Transfer(from, to, value);
        return true;
    }

    function mint(address to, uint256 value) external {
        balanceOf[to] += value;
        totalSupply += value;
        emit Transfer(address(0), to, value);
    }
}



// 1. 任务核心合约
contract TaskRegistry {
    enum TaskStatus { Created, SolutionSelected, Completed }
    
    struct Task {
        uint256 id;
        address creator;
        uint256 reward;
        TaskStatus status;
        uint256 selectedSolution;
    }
    
    struct Solution {
        uint256 id;
        uint256 taskId;
        address solver;
        string content;
        bool rewarded;
    }
    
    mapping(uint256 => Task) public tasks;
    mapping(uint256 => Solution) public solutions;
    uint256 public taskCount;
    uint256 public solutionCount;
    
    OPToken public opToken;
    
    event TaskCreated(uint256 taskId, address creator, uint256 reward);
    event SolutionSubmitted(uint256 solutionId, uint256 taskId, address solver);
    event SolutionSelected(uint256 taskId, uint256 solutionId);
    event RewardClaimed(uint256 taskId, uint256 solutionId, address solver);

    constructor(address _opToken) {
        opToken = OPToken(_opToken);
    }

    // 创建任务并锁定奖励
    function createTask(uint256 reward) public payable {
        require(reward > 0, "Reward must be positive");
        
        opToken.transferFrom(msg.sender, address(this), reward);
        
        taskCount++;
        tasks[taskCount] = Task({
            id: taskCount,
            creator: msg.sender,
            reward: reward,
            status: TaskStatus.Created,
            selectedSolution: 0
        });
        
        emit TaskCreated(taskCount, msg.sender, reward);
    }

    // 提交解决方案
    function submitSolution(uint256 taskId, string memory content) public payable {
        require(tasks[taskId].status == TaskStatus.Created, "Task not open");
        
        solutionCount++;
        solutions[solutionCount] = Solution({
            id: solutionCount,
            taskId: taskId,
            solver: msg.sender,
            content: content,
            rewarded: false
        });
        
        emit SolutionSubmitted(solutionCount, taskId, msg.sender);
    }

    // 选择解决方案（仅任务创建者）
    function selectSolution(uint256 taskId, uint256 solutionId) external {
        Task storage task = tasks[taskId];
        require(msg.sender == task.creator, "Not task creator");
        require(task.status == TaskStatus.Created, "Invalid status");
        require(solutions[solutionId].taskId == taskId, "Solution mismatch");
        
        task.selectedSolution = solutionId;
        task.status = TaskStatus.SolutionSelected;
        
        emit SolutionSelected(taskId, solutionId);
    }

    // 领取奖励（仅解决方案提交者）
    function claimReward(uint256 taskId) external {
        Task storage task = tasks[taskId];
        require(task.status == TaskStatus.SolutionSelected, "Reward not ready");
        
        Solution storage solution = solutions[task.selectedSolution];
        require(!solution.rewarded, "Already rewarded");
        require(msg.sender == solution.solver, "Not solution provider");
        
        solution.rewarded = true;
        task.status = TaskStatus.Completed;
        opToken.transfer(solution.solver, task.reward);
        
        emit RewardClaimed(taskId, task.selectedSolution, solution.solver);
    }
}
