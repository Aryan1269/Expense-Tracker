import {FlatList ,Text} from 'react-native';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({expenses}) => {

  const renderItems = (itemData)=>{
    return <ExpenseItem {...itemData}/>
  }

  return <FlatList data={expenses} renderItem={(item) => renderItems(item.item)} />;
};

export default ExpensesList;