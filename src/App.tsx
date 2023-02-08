import './App.scss'

export function App() {

  return (
    <>
      <div className='box'>
        <div className='border-radius'>
          <div className='game'>
            <div className='top-button-left' />
            <div className='left'>
              <div className='dash' />
              <div className='left-circle' />
              <div className='buttons'>
                <div className='sub-buttons' />
                <div className='sub-buttons' />
                <div className='sub-buttons' />
                <div className='sub-buttons' />
              </div>
              <div className='square' />
            </div>
            <div className='center'>
              <div className='sub-center'>
                <div className='screen'>
                  <div className='small-circle' />
                  <h1>Super Mario</h1>
                  <div className='big-circle' />
                </div>
              </div>
              <div className='top-button-right' />
              <div className='center-right'>
                <div className='dash-middle' />
              </div>
            </div>
            <div className='right'>
              <div className='plus'>
                &#43;
              </div>
              <div className='buttons'>
                <div className='sub-buttons' />
                <div className='sub-buttons' />
                <div className='sub-buttons' />
                <div className='sub-buttons' />
              </div>
              <div className='right-circle' />
              <div className='small-right-circle' />
            </div>
            <div className='right-end' />
          </div>
        </div>
      </div>
      <div className='base' />
      <div className='box-2' />
    </>
  )
}