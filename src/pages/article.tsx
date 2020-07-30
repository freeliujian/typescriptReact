import * as React from "react"
import {connect} from 'react-redux'
import {ArticlePage} from '../reducers/Article'
import { HeartTwoTone} from '@ant-design/icons';
import './article.scss'

interface IHistory {
    push: (pathname: string) => void
}

interface Prop {
    history: IHistory
    articleDeatil:ArticlePage
}

interface ArticleType {
    Article:ArticlePage
}

class ArticleContent extends React.Component<Prop> {
    
    constructor(prop:Prop){
        super(prop)
        
    }
    state = {
        goodflag:false
    }


    render(){
        console.log(this.props)
        const {articleDeatil} = this.props;
        const {goodflag} = this.state
        const {article,title,good}=articleDeatil
        return (
            <div className="article-warpper">
                <section className="article-title-warpper">
                    <h1>
                        {title}
                    </h1>
                    <ul className='article-nav-wrapper'>
                        <li onClick={()=>this.handleClickRouter()}>
                        首页
                        </li>
                    </ul>
                </section>
                <section className="article-deatil-warpper" dangerouslySetInnerHTML={{__html:article}}></section>
                <section className='article-nav-button' onClick={()=>this.handleClickGood()}>
                    {
                        (goodflag)?
                        <React.Fragment>
                            <HeartTwoTone twoToneColor="#eb2f96" />
                            <span style={{color:"#eb2f96",textIndent:'5px'}}>{good}</span>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <HeartTwoTone twoToneColor="#CCC" />
                            <span style={{color:"#ccc",textIndent:'5px'}}>{good}</span>
                        </React.Fragment>
                    }
                    <span> 赞</span>
                </section>
                <footer>
                    <section className='footer-wrapper'>
                        <div className="footer-textare">

                        </div>
                    </section>
                </footer>
            </div>
        )
    }

    handleClickRouter(){
        const {history} = this.props
        history.push('/');
    }

    handleClickGood(){
        this.setState({
            goodflag:!this.state.goodflag
        })
    }
}

const mapStateToProps = (state: ArticleType): object => {
    return {
        articleDeatil:state.Article
    }
}

const ArticleContents =connect(
    mapStateToProps,
    null
)(ArticleContent)


export default ArticleContents