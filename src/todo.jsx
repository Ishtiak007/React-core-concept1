export default function Todo({ task, isDone }) {
  //   if (isDone === true) {
  //     return <li>Done : {task} </li>;
  //   } else {
  //     return <li>Work on : {task}</li>;
  //   }
  //   return (
  //     <li>
  //       {isDone ? "Finished" : "Worked On"}:{task}
  //     </li>
  //   );
  //   return (
  //     <li>
  //       {task}
  //       {isDone || ": DO IT"}
  //     </li>
  //   );
  let listItem;
  if (isDone) {
    listItem = <li>Finish: {task}</li>;
  } else {
    listItem = <li>Work On: {task}</li>;
  }
  return listItem;
}
