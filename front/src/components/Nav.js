// src/components/Nav.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText }from 'material-ui/List';


export default function Nav({ categories, onClick }) {
  // 遷移先パスの生成
  //   - カテゴリIDが"1"の場合は /all
  //   - それ以外は /category/カテゴリID
  const to = category => (
    category.id === '1'
      ? '/all'
      : `/category/${category.id}`
  );

  return (
    <Drawer type="permanent">
    <List style={{width: 240}}>
      {/* props.categoriesからリンク一覧を生成 */}
      {categories.map(category => (
        <ListItem
	button
	 key={`menu-item-${category.id}`}
	 onClick={() => onClick(to(category))}>
          <ListItemText primary = {category.name}
          />
        </ListItem>
      ))}
    </List>
    </Drawer>
  );
}
Nav.propTypes = {
  // state.shopping.categoriesの構造
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ).isRequired
};
