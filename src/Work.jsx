import * as React from 'react'
// import Preload from 'react-preload'

import './Work.css'
import WorkSideMenu from './WorkSideMenu'
import work from './work'
// const images = [require('./images/museum-0.png'), require('./images/museum-1.png'), require('./images/museum-2.png'), require('./images/museum-3.png')]

export default class Work extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            projectIdx: 0,
            imageIdx: {
                museum: 0,
                keys: 0
            }
        }
    }

    changePicture = ev => {
        let {type, work} = ev.target.dataset
        if (ev.target.dataset.idx) {
            this.setState({
                imageIdx: Object.assign({}, this.state.imageIdx, {[work]: Number(ev.target.dataset.idx)})
            })
            return
        }
        let {imageIdx} = this.state
        let newIdx
        if (type === 'forward') {
            if (imageIdx[work] + 1 > 3) {
                newIdx = 0
            } else {
                newIdx = imageIdx[work] + 1
            }
        } else {
            if (imageIdx[work] - 1 < 0) {
                newIdx = 3
            } else {
                newIdx = imageIdx[work] - 1
            }
        }
        this.setState({imageIdx: Object.assign({}, imageIdx, {[work]: newIdx})})
    }

    changeWork = idx => {
        this.setState({projectIdx: idx})
    }

    goHome = () => {
        this.props.goHome('home')
    }

    renderDot = (image, idx) => (
        <i key={`${image}-dot`}
            className={`fa fa-circle ${idx === this.state.imageIdx[work[this.state.projectIdx].id] ? 'active' : ''} dot`}
            data-idx={idx}
            data-work={work[this.state.projectIdx].id}
            onClick={this.changePicture} />
    )

    renderLink = link => (
        <a key={Object.keys(link)}
            className={Object.keys(link)}
            href={link[Object.keys(link)]}>{Object.keys(link)}</a>
    )

    renderWork = work => (
        <div key={work.id} className="piece-container">
            <div className="piece-subcontainer">
                <div className="work-header">
                    {work.title}
                </div>
                <div className="piece-media">
                    <div className="image-container">
                        <div id={`${work.id}-${this.state.imageIdx[work.id]}`} className="piece-img" />
                        <div className="previous"
                            data-type="back"
                            data-work={work.id}
                            onClick={this.changePicture}>previous</div>
                        {work.images.map(this.renderDot)}
                        <div className="next" 
                            data-type="forward"
                            data-work={work.id}
                            onClick={this.changePicture}>next</div>
                    </div>
                    <div className="description">
                        <div className="subheader">{work.title}: </div>
                        {work.description}
                    </div>
                    <div className="links-container">
                        {work.links.map(this.renderLink)}
                    </div>
                </div>
            </div>
        </div>
    )

    render () {
        return (
            <div className="work-container">
                <WorkSideMenu changeWork={this.changeWork} />
                {this.renderWork(work[this.state.projectIdx])}
            </div>
        )
    }
}
