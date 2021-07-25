    import React from 'react'
    
    export const Footer = () => {
        let footerStyle = {
            position: "relative",
            top: "20vh",
            width: "100%"
            // backgroundColor: "red"
        }
        return (
            <div className="bg-warning text-light text-center py-3" style={footerStyle}>
                <h4>Copyright &copy; Bilal.com</h4>
            </div>
        )
    }
    