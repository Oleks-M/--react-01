import { Statistics } from './Statistics/Statistics';
import Profile from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json'


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends} />
    </div>
  );
};
