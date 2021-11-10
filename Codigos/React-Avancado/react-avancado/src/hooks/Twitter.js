import React, { useEffect, useState, memo} from "react"

const areEqual = (prevProps,nextProps) => {
  return prevProps.loading === nextProps.loading
}

function Twitter(props){

  const { loading } = props
  const [tweet, setTweet] = useState()

  // state = {
  //   tweet: 'title'
  // }

  // const componentDidMount = () => {
  //   const {posts, loading} = this.props
  //   console.log('componentDidMount', posts)
  //   console.log('componentDidMount', loading)
  // }

  //Equivalente ao componenteDidMount
  useEffect(() => {
    const {posts, loading} = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount', loading)
  },[])

  // const componentDidUpdate = (prevProps) => {
  //   const { loading } = props
  //   if(props.loading !== prevProps.loading){
  //     console.log('componentDidUpdate', loading)
  //   }
  // }

  //Equivalente ao componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate', loading)
  },[loading])

  // const componentWillUnmount = () => {
  //   console.log('componentWillUnmount')
  // }

  //Equivalente ao componentWillMount
  useEffect(() => {
    return() => {
      console.log('componentWillMount')
    }
  },[])

  // const shouldComponentUpdate = (nextProps, nextStates) => {
  //   return this.state.tweet !== nextStates.tweet || nextProps.loading !== this.props.loading
  // }

  const handleTweet = () => {
    setTweet('Tweet atualizado')
  }

  console.log('Tweet:', tweet)

  return(
    <div>
      <button onClick={handleTweet}>Re-render</button>
      tests
    </div>
  )
}

export default memo(Twitter,areEqual)