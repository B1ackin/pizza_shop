import React, {useState} from 'react';


export const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(0)

    const onClickCategory = (i: number) => {
        setActiveCategory(i)
    }

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, i) => (
                        <li onClick={() => onClickCategory(i)}
                            className={activeCategory === i ? 'active' : ''}>{value}</li>
                    ))
                }
            </ul>
        </div>
    )
}