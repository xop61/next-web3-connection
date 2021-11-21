import React from 'react';
import Container from '@mui/material/Container';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <div className="header">
      <Container>
        <div className="header-content">
          <div className="logo">
            <img
              src="../logo.png"
              alt=""
              data-nsfw-filter-status
            />

          </div>
          <div className="header-actions">
            <ThemeSwitch />
          </div>
        </div>
      </Container>
    </div>
  )
}