const Button = props => {
  //  Write your code here.
  const {className, buttonName} = props
  return <button className={`${className}`}> {buttonName} </button>
}

const element = (
  //  Write your code here.
  <div>
    <h1 className='heading'> Social Buttons </h1>
    <div class='container'>
      <Button buttonName='Like' className='like' />
      <Button buttonName='Comment' className='comment' />
      <Button buttonName='Share' className='share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
