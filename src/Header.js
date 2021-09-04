import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import {Avatar,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider';
function Header() {

  const [{user},dispatch] =useStateValue();

  return (
    <div className="header">
      <div className="header__left">
      
      <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="Facebook logo and symbol, meaning, history, PNG"  />
          <div className="header__input">
             <SearchIcon/>
             <input type="text" placeholder="facebook Account"/>
          </div>
      </div>
      

      <div className="header__center"></div>
        <div className="header__option">
          <HomeIcon fontSize="large"></HomeIcon>
        </div>

        <div className="header__option">
          <FlagIcon fontSize="large"></FlagIcon>
        </div>
       
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large"></SubscriptionsOutlinedIcon>
          
        </div>

        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large"></StorefrontOutlinedIcon>
        </div>

        <div className="header__option">
          <SupervisedUserCircleOutlinedIcon fontSize="large"></SupervisedUserCircleOutlinedIcon>
        </div>
        
      <div className="header__right"></div>
         <div className="header__info">
           <Avatar src={user.photoURL}/>
           <h4>{user.displayName}</h4>
         </div>
         <IconButton>
           <AddIcon />
         </IconButton>

         <IconButton>
           <ForumIcon />
         </IconButton>

         <IconButton>
           <NotificationsActiveIcon />
         </IconButton>

         <IconButton>
           <ExpandMoreIcon />
         </IconButton>

         
      
    </div>
  )
}

export default Header
