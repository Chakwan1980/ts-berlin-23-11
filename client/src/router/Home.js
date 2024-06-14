import React from 'react';
import TopicButton from '../components/TopicButton';

import '../assets/styles/index.css';
import '../assets/styles/Home.css';

import linux_btn from '../assets/images/linux-button.svg';
import python_btn from '../assets/images/python-button.svg';
import aws_btn from '../assets/images/aws-button.svg';

function Home() {
    return (
        <div id="HomeWrapper">
            <div id="HomeWrapperInner">
                <TopicButton name="Linux" className="linux" url={linux_btn} />
                <TopicButton name="Python" className="python" url={python_btn} />
                <TopicButton name="AWS" className="aws" url={aws_btn} />
                <TopicButton name="Linux" className="linux" url={linux_btn} />
            </div>
        </div>
    );
}

export default Home;