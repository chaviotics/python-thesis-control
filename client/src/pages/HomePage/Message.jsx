import React from 'react';
import { Container, Typography } from '@mui/material';

function Message() {
  return (
    <Container>
      <Typography
        sx={{ textAlign: 'center', pt: '2rem', mb: '5rem' }}
        variant="h3"
      >
        Message from the Researcher
      </Typography>
      <Typography variant="body1">
        Dear Isko/Iska,
        <br />
        <br />
        Welcome! This Python tutorial is designed to provide you with an
        interactive learning experience. As such, I would like to encourage you
        to participate to the best of your abilities.
        <br />
        <br />
        Please keep in mind that your scores are anonymous and that there is no
        grading involved in this tutorial. I simply want you to learn at your
        own pace and have fun 😊.
        <br />
        <br />
        <strong>
          <u>
            Once you proceed to the next section, please DO NOT go back to the
            previous page
          </u>
        </strong>
        , as it is essential for this research. Please take your time and review
        the material carefully before moving forward.
        <br />
        <br />
        Moreover, try not to go to other tabs on your browser while taking this
        tutorial. To maximize your experience, you can full screen your web
        browser, by pressing <code>F11</code>.
        <br />
        <br />
        I appreciate your time and effort in participating in this research.
        Your feedback and insights are invaluable.
        <br />
        <br />
        Once you are ready to proceed, press the button below. Again, do not go
        back to the previous page in your web browser.
        <br />
        <br />
        Thank you and have a great learning experience!
        <br />
        <br />
        Sincerely,
        <br />
        Kuya Chav
      </Typography>
    </Container>
  );
}

export default Message;
