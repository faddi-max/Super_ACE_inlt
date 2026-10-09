import { PageLayout } from "@/components/layout/PageLayout"
import { BlogHero } from "@/components/sections/BlogHero"
import { BlogIndex } from "@/components/sections/BlogIndex"
import { FAQ } from "@/components/sections/FAQ"

import { Testimonials } from "@/components/sections/Testimonials"


export const Blogs = () => {
    return (
        <PageLayout>
              <BlogHero />
              <BlogIndex />
              <Testimonials />
                  
                    <FAQ />
        </PageLayout>
    )
}