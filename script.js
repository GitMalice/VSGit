setTimeout( () => {
    document.body.style.backgroundColor = 'red'
    setTimeout( () => {
      document.body.style.backgroundColor = 'orange'
      setTimeout( () => {
        document.body.style.backgroundColor = 'blue'
        setTimeout ( () => {
          document.body.style.backgroundColor = 'purple'
          setTimeout( () => {
            document.body.style.backgroundColor = 'green'
          },1000)
        },1000)
      }, 1000)
    }, 1000)
},1000)