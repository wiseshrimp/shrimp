import * as React from 'react'
import Preload from 'react-preload'

import './LoadingIndicator.css'
import './Work.css'
import WorkSideMenu from './WorkSideMenu'
import work from './work'

let images = function () {
    let imageArray = []
    work.forEach(piece => {
        imageArray = [...imageArray, ...piece.images]
    })
    return imageArray
}()

export default class Work extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            projectIdx: 0,
            imageIdx: {
                museum: 0,
                keys: 0
            },
            fullscreenImage: {
                isExpanded: false,
                image: null
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
        this.setState({
            imageIdx: Object.assign({}, imageIdx, { [work]: newIdx })
        })
    }

    changeWork = idx => {
        this.setState({projectIdx: idx})
    }

    fullscreenImage = ev => {
        this.setState({ fullscreenImage: { isExpanded: true, image: ev.target.id } })
    }

    exitFullscreen = () => {
        this.setState({ fullscreenImage: { isExpanded: false, image: null } })
    }

    goHome = () => {
        this.props.goHome('home')
    }

    openLink = ev => {
        window.open(ev.target.dataset.href)
    }

    renderDot = (image, idx) => (
        <i key={`${image}-dot`}
            className={`fa fa-circle ${idx === this.state.imageIdx[work[this.state.projectIdx].id] ? 'active' : ''} dot`}
            data-idx={idx}
            data-work={work[this.state.projectIdx].id}
            onClick={this.changePicture} />
    )

    renderFullscreenImage = () => {
        return (
            <div className="fullscreen-container">
                <div onClick={this.exitFullscreen} className="back">back</div>
                <div id={this.state.fullscreenImage.image} className="fullscreen-image" />
            </div>
        )
    }

    renderLink = link => (
        <div key={Object.keys(link)}
            className={`${Object.keys(link)} link`}
            onClick={this.openLink}
            data-href={link[Object.keys(link)]}>{Object.keys(link)}</div>
    )

    renderCircle = (
        <div className="cssload-circle" />
    )

    renderLoadingIndicator = () => (
        <div className="cssload-wrap">
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
            <div className="cssload-circle" />
        </div>
    )

    renderWork = work => (
        <div key={work.id} className="piece-container">
            <div className="piece-subcontainer">
                <div className="work-header">
                    {work.title}
                </div>
                <div className="piece-media">
                    <div className="image-container">
                        <div id={`${work.id}-${this.state.imageIdx[work.id]}`}
                            className="piece-img"
                            data-image={this.state.imageIdx[work.id]}
                            onClick={this.fullscreenImage} />
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

    renderWorkPage = () => (
        <div>
            <WorkSideMenu changeWork={this.changeWork} />
            {this.renderWork(work[this.state.projectIdx])}
        </div>
    )

    render() {
        const loadingIndicator = this.renderLoadingIndicator()
        return (
            <div className="work-container">
                <Preload
                    loadingIndicator={loadingIndicator}
                    images={images}>
                    {this.state.fullscreenImage.isExpanded ? this.renderFullscreenImage() : this.renderWorkPage()}
                </Preload>
            </div>
        )
    }
}
