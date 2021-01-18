const createTaskQueue = () => {
  const taskQueue = []
  return {
    // 向任务队列添加任务
    push: item => taskQueue.push(item),
    // 从任务队列获取任务
    pop: () => taskQueue.shift()
  }
}

export default createTaskQueue