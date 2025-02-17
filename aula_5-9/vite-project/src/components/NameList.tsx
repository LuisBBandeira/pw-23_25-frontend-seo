import {useMemo } from "react";

type Props = {
    list: Array<string>;
    filter: string;
};


const NameList = ({list , filter} : Props) => {

    const filteredList = useMemo(() => {
        return list.filter((item) => item.includes(filter))
    } , [list , filter]);

    return (
        <ul>
            {filteredList.map(item => <li key={item}> key={item}</li>)}
        </ul>
    )
}

export default NameList