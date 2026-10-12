import { PageLayout } from "@/components/layout/PageLayout"
import { BlogHero } from "@/components/sections/BlogHero"
import { BlogIndex } from "@/components/sections/BlogIndex"
import { CTASection } from "@/components/sections/CTASection"
import { FAQ } from "@/components/sections/FAQ"
import { ProductBrief } from "@/components/sections/ProductBrief"

import { Testimonials } from "@/components/sections/Testimonials"


export const Blogs = () => {
    return (
        <PageLayout>
              <BlogHero />
              <BlogIndex />
              <Testimonials />
                  
                    <FAQ />
                   <ProductBrief />
        </PageLayout>
    )
}