if ('serviceWorker' in navigator){
  navigator.serviceWorker
  .register('./service-worker.js')
  .then(()=>{
      console.log('service worker is working')
  })
  .catch((e)=>{
      console.log('this is error')
      console.log(e)
  });
}
  else{
      console.log('its not avaliable')
  }