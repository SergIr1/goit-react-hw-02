import './App.module.css'

import Profile from '../Profile/Profile';
import userData from "../../consigs/userData.json";

import FriendList from "../FriendList/FriendList"
import friends from "../../consigs/FriendList.json"

import TransactionHistory from "../TransactionHistory/TransactionHistory"
import transactions from "../../consigs/TransactionHistory.json"

export default function App() {
  return (
    <>
      <Profile profile={userData}
        // name={userData.username}
        // tag={userData.tag}
        // location={userData.location}
        // image={userData.avatar}
        // stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
