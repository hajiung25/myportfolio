import React, { useState } from 'react'

import { HeaderContainer, HeaderMainContianer, HeaderLinkText } from '../style/header/header'
import { Link } from 'react-scroll'

function Header() {
    const headerText = [ {
        text: 'home'
    },
    {
        text: 'skills'
    },
    {
        text: 'projects'
    },
    {
        text: 'blog'
    },
    ]
    return (
        <HeaderContainer>
            <HeaderMainContianer>
                {
                    headerText.map((e) => {
                        return (
                            <HeaderLinkText key={e.text}>
                                <Link to={`${e.text}`} smooth={true}>{e.text}</Link>
                            </HeaderLinkText>
                        )
                    })
                }
            </HeaderMainContianer>
        </HeaderContainer>
    )
}

export default Header