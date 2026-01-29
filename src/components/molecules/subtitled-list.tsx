import type { SubtitledListItemProps } from "../molecules/subtitled-list-item.tsx";
import SubtitledListItem from "../molecules/subtitled-list-item.tsx";

import "./subtitled-list.css"

interface SubtitledListProps {
    items: SubtitledListItemProps[];
}
export default function SubtitledList({ items }: SubtitledListProps) {
    return (
        <div className="subtitled-list">
            {
                items.map((item, i)=>(
                    <SubtitledListItem key={i} {...item}></SubtitledListItem>
                ))

            }
        </div>
    );
}
