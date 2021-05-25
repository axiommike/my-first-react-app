import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import React from 'react'

export default function About() {
    return (
        <div>
            <Card>
                <CardMedia component='img' image='https://mikecameron.ca/wp-content/uploads/2020/11/blue-bio-wide-1024x576.png'></CardMedia>
                <CardHeader title='Who the heck am I?' subheader="Let's get to know each other"></CardHeader>
                <CardContent>
                    <Typography>My name is Mike Cameron and I am a passionate family man, entrepreneur, speaker and writer. A big proponent of life long learning and always believe that there is something to be taken away from every experience.
I enjoy writing and sharing ideas and inspiring others to find the best in themselves. </Typography>
<Typography>This site is a hub for any of those ideas, interests that I feel compelled to write about. If you enjoy, please comment. The more feedback you give the more I can learn.
When my girlfriend was murdered by an ex-boyfriend in 2015 I took a keen interest in domestic violence prevention and specifically in redefining what it means to be a badass.
I run my business and try to live my life by the three tenets of Passion, Pride and Purpose. If I can be of service to you, please reach out.</Typography>

<Typography>Much Love,</Typography>
Mike</CardContent>
            </Card>
        </div>
    )
}
