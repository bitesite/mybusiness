import React from 'react';
import { Frame } from '@bitesite/react-figstrap';
import RailsIcon from '../../assets/images/tools/rails-icon.png'
import GitIcon from '../../assets/images/tools/git-icon.png'
import ReactIcon from '../../assets/images/tools/react-icon.png'
import BitBucketIcon from '../../assets/images/tools/bitbucket-icon.png'
import TrelloIcon from '../../assets/images/tools/trello-icon.png'
import ExpoIcon from '../../assets/images/tools/logos_expo.png'
import HerokuIcon from '../../assets/images/tools/logos_heroku.png'

const ToolsWeUse = () => {
  return (
    <div className='tools-component'>
      <Frame className="tools-card" vertical justifyContent="center" gap="64"> 
        <Frame className="heading-regular" justifyContent="center">Tools We Use</Frame>
        <Frame className="tools-list" justifyContent="center" gap="50">
          <Frame className="tool-item" vertical alignItems="center">
            <img className="tools-icon rails-icon" src={RailsIcon} ></img>
            <div>Ruby on Rails</div>
          </Frame>
          <Frame className="tool-item" vertical alignItems="center"> 
            <img className="tools-icon" src={GitIcon} ></img>            
            <div>GitHub</div>
          </Frame> 
          <Frame className="tool-item" vertical alignItems="center"> 
            <img className="tools-icon" src={ExpoIcon} ></img>
            <div>Expo</div>
          </Frame>
          <Frame className="tool-item" vertical alignItems="center"> 
            <img className="tools-icon" src={ReactIcon} ></img>
            <div>React Native</div>
          </Frame>
          <Frame className="tool-item" vertical alignItems="center"> 
            <img className="tools-icon" src={BitBucketIcon} ></img>
            <div>BitBucket</div>
          </Frame>
          <Frame className="tool-item" vertical alignItems="center"> 
            <img className="tools-icon" src={HerokuIcon} ></img>
            <div>HerokuApp</div>
          </Frame>
          <Frame className="tool-item" vertical alignItems="center"> 
            <img className="tools-icon" src={TrelloIcon} ></img>
            <div>Trello</div>
          </Frame>
        </Frame >  
      </Frame> 
    </div>
  )
};


export default ToolsWeUse;