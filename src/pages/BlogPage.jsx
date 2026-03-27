import { memo } from 'react'
import CTABanner from '../components/sections/CTABanner'

const BlogPage = memo(function BlogPage() {
    return (
        <main className="page-content" style={{ paddingTop: '160px', paddingBottom: '100px', textAlign: 'center' }}>
            <div className="container">
                <h1 className="section-heading">Agricore Blog</h1>
                <p className="section-sub" style={{ margin: '24px auto 48px' }}>
                    Tips, tricks, and inspiration for your outdoor living spaces. Our expert horticulturists share their knowledge once a week.
                </p>
                <div style={{ padding: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h3 style={{ color: 'white', marginBottom: '16px' }}>Coming Soon...</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>We are currently crafting stories that will inspire your next landscaping masterpiece. Check back soon for our first wave of articles!</p>
                </div>
            </div>
            <CTABanner />
        </main>
    )
})

export default BlogPage
