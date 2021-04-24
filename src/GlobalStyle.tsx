import { Global, css } from "@emotion/react";

const styles = css`
  :root {
    --primary: #c60310;
    --primary-light: #ff4438;
    --primary-dark: #c60310;
    --primary-gradient: linear-gradient(117.29deg, #000b18 0%, #5d79ba 99.56%);
    --secondary: #ffd234;
    --secondary-light: #ffd234;
    --secondary-gradient: linear-gradient(
      116.9deg,
      #5d79ba 0.28%,
      #bed1f8 99.61%
    );
    --black: #323339;
    --bg: #f5f6fa;
    --bg-grey: #e5e5e5;
    --grey: #abadb8;
    --dark-grey: #686a79;
    --light-grey: #d5d7e0;
    --green: #13d08c;
  }

  body {
    padding: 0;
    background-color: var(--bg-grey);
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  strong,
  b {
    font-weight: 600;
  }

  *,
  *:before,
  *:after {
    -webkit-overflow-scrolling: touch;
  }

  .Toastify {
    @media only screen and (max-width: 480px) {
      .Toastify__toast-container {
        margin: auto;
        left: 0;
        right: 0;
        width: 320px;
      }
      .Toastify__toast-container--top-center {
        top: 1rem;
      }
    }

    .Toastify__toast {
      min-height: 54px;
    }
    .Toastify__toast-body {
      margin: auto 0.5rem;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export const GlobalStyle = () => <Global styles={styles} />;
