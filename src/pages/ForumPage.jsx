import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import TopPage from './TopPage'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import Forumtable from '../components/ForumTab/Forumtable'

export class ForumPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
            <Fragment>
            <TopNavigation/>
               <TopPage pagetitle="Forum"/>

                    <Forumtable />
                

               <Contact/>



               <Footer/>
            
            
            </Fragment>
          )
     }
}

export default ForumPage
