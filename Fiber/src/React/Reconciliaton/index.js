import { createTaskQueue } from '../Misc'

const taskQueue = createTaskQueue()

export const render = (element, dom) => {
  /*
    1、向任务队列中添加任务
    2、指定在浏览器空闲时执行任务
  */
 taskQueue.push({
   dom,
   props: { children: element }
 })
 console.log(taskQueue.pop())
}