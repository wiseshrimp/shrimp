import React from 'react'

import './WorkSideMenu.css'
import work from './work'

export default class WorkSideMenu extends React.Component {
   renderLink = (work, idx) => (
      <div key={`menu-item-${work.id}`} className="inline">
         <div
            className="menu-item"
            onClick={this.changeWork}
            data-idx={idx}>{work.title}</div>
         <div className="divider">|</div>
      </div>
   )

   changeWork = ev => {
      this.props.changeWork(ev.target.dataset.idx)
   }

   render () {
      return (
         <div className="side-menu">
            <div className="side-menu-header">other stuff:</div><br />
            <div className="divider">|</div>
            {work.map(this.renderLink)}
         </div>
      )
   }
}
