export const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '2em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  }
  
  export const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }
  
  export const overlayStyle = {
    float: 'left',
    margin: '0em 3em 1em 0em',
  }
  
  export const fixedOverlayStyle = {
    ...overlayStyle,
    position: 'fixed',
    top: '80px',
    zIndex: 10,
  }
  
  export const overlayMenuStyle = {
    position: 'relative',
    left: 0,
    transition: 'left 0.5s ease',
  }
  
  export const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    left: '800px',
  }
  