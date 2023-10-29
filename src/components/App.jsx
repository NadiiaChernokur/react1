import { Profile } from "./Profile/Profile";
import { ProfileCard } from "./Profile/ProfileCard";
import { Statistics } from "./Statistic/Statistics";
import { statisticsCard } from "./Statistic/StatisticsCard";
import { friends } from "./Friends/Friends";
import { FriendList } from "./Friends/FriendList";
import { transactions } from "./TransactionHistory/Transaction";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";



export const App = () => {
  return (
    <div>
     <Profile
  username={ProfileCard.username}
  tag={ProfileCard.tag}
  location={ProfileCard.location}
  avatar={ProfileCard.avatar}
  stats={ProfileCard.stats}
/>

  <Statistics  stats={statisticsCard}/>
  <FriendList friends={friends}/>
  <TransactionHistory items={transactions} />
  
    </div>

  );
};

