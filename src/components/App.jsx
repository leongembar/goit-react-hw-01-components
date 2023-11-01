import { Profile } from "./Profile/Profile";
import user from '../data-json/user.json'

import { Statistics } from "./Statistics/Statistics";
import data from '../data-json/data.json';

import { FriendList } from "./FriendList/FriendList";
import friends from '../data-json/friends.json';

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transaction from "../data-json/transactions.json"

export const App = () => {
  
  return (
    <div>
      React homework template
      <Profile 
      key={user.tag}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />

      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory  items={transaction} />
    </div>
  );
};
