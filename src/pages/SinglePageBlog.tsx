import { PageLayout } from "@/components/layout/PageLayout"
import { BlogArticle } from "@/components/sections/BlogArticle"
import { BlogPostHero } from "@/components/sections/BlogPostHero"

import { FAQ } from "@/components/sections/FAQ"
import { ProductBrief } from "@/components/sections/ProductBrief"
import { Testimonials } from "@/components/sections/Testimonials"

export const SinglePageBlog = () => {
    return (
        <PageLayout>
      <BlogPostHero />
       <BlogArticle />
       <Testimonials />
                        
                          <FAQ />
                          <ProductBrief />
    </PageLayout>
    )
}