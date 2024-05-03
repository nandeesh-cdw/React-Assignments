import React from 'react'
import styles from './BlogSection.module.scss'
import BlogCard from '../BlogCard/BlogCard'
function BlogSection() {
  return (
    <div className={styles.container}>
        <div className={styles.search_wrapper}>

        </div>
        <div className={styles.blogs_wrapper}>
          <BlogCard title={"How to Time Travel"} tag={"International"} description={`There is an old saying that life is a journey. In fact, life is many journeys. The more of them you take, the longer it will seem. I thought about this. Then I thought about my childhood. It turns out that I rode the bus to school nearly 200 days a year for more than 10 years. That’s 2,000 days. I don’t remember most of those days. They blur together. But when I was a child, once a year, we would take a family vacation. I remember every single one of these. The first one was to St Louis. It was the first time I was on an airplane. My sister was maybe 2 or 3 years old. I remember her in her little stroller. Each year we took a trip. Dallas. Baltimore. Chicago. Seattle. When I look back on my life and the experiences I have had, I think back to these journeys. I remember every one of them. They are vivid life experiences that I shared with the people I care about. My life is longer because of the journeys I have taken. When I am on my death bed, I want to look back at my life, and have all these vivid memories. I want them to be full and different every single day.","photo`}/>
        </div>
    </div>
  )
}

export default BlogSection