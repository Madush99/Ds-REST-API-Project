import React, { useEffect } from 'react';
import './style.css';
import { useSelector,useDispatch } from 'react-redux';
import {getAllCategory} from '../../actions';

/**
* @author
* @function MenuHeader
**/

const MenuHeader = (props) => {

  const category = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const renderCategories = (categories) => {

    let Scategories = [];
    for (let category of categories) {
      Scategories.push(
        <li key={category.name}>
          {
            category.parentId ? <a href ={category.slug}>{category.name}</a> :
            <span>{category.name}</span>
          }
         
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}

        </li>
      );
    }

    return Scategories;

  }

  return (
    <div className="menuHeader">
      { category.categories.length > 0 ? renderCategories(category.categories) : null}
    </div>
  )

}

export default MenuHeader