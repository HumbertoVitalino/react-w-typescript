import style from './list.module.scss';
import Item from './item';
import { ITask } from '../../types/task';

interface Props {
    tasks: ITask[],
    selectTask: (selectTask: ITask) =>  void
}

function List({ tasks, selectTask }: Props ) {
    
    return(
        <aside className={style.taskList}>
            <h2> daily studies</h2>
            <ul>
                {tasks.map((item) => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;