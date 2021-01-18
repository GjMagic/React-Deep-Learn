import { createTaskQueue } from '../Misc'

const taskQueue = createTaskQueue()
let subTask = null

const getFirstTask = () => {
  // 从任务队列中获取任务
  const task = taskQueue.pop()
  const { props, dom } = task
  // 返回最外层节点的fiber对象
  return {
    props,
    stateNode: dom,
    tag: 'host_root',
    effects: [],
    child: null,
  }
}

const executeTask = fiber => {
  console.log(fiber)
}

const workLoop = deadline => {
  // 如果子任务不存在，就去获取子任务
  if (!subTask) {
    subTask = getFirstTask()
    console.log(subTask)
  }
  // 如果任务存在且浏览器有空余时间，就调用executeTask方法执行任务，接受任务 返回新任务
  while (subTask && deadline.timeRemaining > 1) {
    subTask = executeTask(subTask)
  }
}

const performTask = deadline => {
  // 执行任务
  workLoop(deadline)
  // 若任务存在或者任务队列里还有任务时，再次利用浏览器空闲时间执行任务
  if (subTask || !taskQueue.isEmpty) {
    requestIdleCallback(performTask)
  }
}

export const render = (element, dom) => {
  /*
    1、向任务队列中添加任务
    2、指定在浏览器空闲时执行任务
  */
 // 通过virtualDOM对象创建Fiber对象
 taskQueue.push({
   dom,
   props: { children: element }
 })

 // 利用浏览器空闲时间执行任务
 requestIdleCallback(performTask)
}