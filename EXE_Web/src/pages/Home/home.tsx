import { GET_PRODUCTS_QUERY_KEY, getProducts } from '@/apis/product.api';
import logo from '@/assets/favicon.svg';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import StyledHeading from '@/components/common/styled-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { ChevronRight } from 'lucide-react';

import BestSellerList from './components/best-seller-list';
import BlogList from './components/blog-list';
import BranchList from './components/branch-list';
import ContentList from './components/content-list';
import FranchiseForm from './components/franchise-form';

import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: [GET_PRODUCTS_QUERY_KEY],
    queryFn: () => getProducts(),
    select: (data) => data.content.slice(0, 3),
  });
  return (
    <>
      {isLoadingProducts ? (
        <div className='flex items-center justify-center min-h-screen'>
          <LoadingSpinner />
        </div>
      ) : (
        <main className='min-h-screen bg-background overflow-x-hidden'>
          {/* Why Choose Us Section */}
          <section className='relative pb-20 pt-3 overflow-hidden lg:px-30'>
            <div className='container mx-auto px-4'>
              <div className='flex flex-col items-center mb-12'>
                <Badge className='bg-primary/10 text-primary font-medium text-lg my-9 rounded-full px-4 py-1'>
                  Trải nghiệm ẩm thực
                </Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-3 text-center relative'>
                  <StyledHeading
                    text={
                      <>
                        TẠI SAO CHỌN CƠM
                        <span className='text-primary'> TẤM TẮC</span> ?
                      </>
                    }
                  />
                </h2>
              </div>

              <ContentList />
            </div>
          </section>

          {/* Best Sellers Section */}
          <section className='py-20 bg-gradient-to-b from-secondary to-background relative lg:px-30'>
            <div className='absolute top-[-32px] right-0 w-[120%] z-0 h-25 bg-background -rotate-2' />

            <div className='container mx-auto px-4'>
              <div className='flex flex-col items-center mb-12'>
                <Badge className='bg-background text-primary font-medium text-lg my-7 rounded-full px-4 py-1'>
                  Món ăn nổi bật
                </Badge>
                <h2 className='text-3xl md:text-4xl font-bold text-center'>BEST SELLERS</h2>
              </div>

              <BestSellerList products={products} />

              <div className='mt-12 text-right'>
                <Button variant='outline' className='border-primary text-primary hover:bg-primary hover:text-white'>
                  Xem thêm món ăn
                  <ChevronRight className='h-4 w-4 ml-2' />
                </Button>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className=' pt-0 pb-22 relative lg:px-30'>
            <div className='container mx-auto px-4'>
              <div className='flex flex-col items-center mb-12'>
                <Badge className='bg-primary/10 text-primary font-medium text-lg mb-3 rounded-full px-4 py-1 my-9'>
                  Câu chuyện ẩm thực
                </Badge>
                <h2 className='text-3xl md:text-4xl font-bold text-center relative'>
                  <StyledHeading text='CHUYỆN CƠM TẤM' />
                </h2>
              </div>

              <BlogList />
            </div>
          </section>

          {/* Franchise Section */}
          <section className='py-20 bg-gradient-to-b from-secondary to-background relative lg:px-30'>
            <div className='absolute top-[-31px] left-0 w-[130%] z-0 h-25 bg-background rotate-3' />

            <div className='container mx-auto px-4'>
              <div className='flex flex-col items-center mb-12'>
                <Badge className='bg-background text-primary font-medium text-lg my-7 rounded-full px-4 py-1'>
                  Cơ hội kinh doanh
                </Badge>
                <h2 className='text-3xl md:text-4xl font-bold text-center'>HỆ THỐNG NHƯỢNG QUYỀN</h2>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <BranchList />

                <div className='bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden'>
                  <div className='relative'>
                    <div className='flex items-center mb-4'>
                      <div className='w-12 h-12 rounded-full flex items-center justify-center mr-4'>
                        <img src={logo} alt='Tấm Tắc Logo' />
                      </div>
                      <h3 className='text-2xl font-bold'>ĐĂNG KÝ NHƯỢNG QUYỀN</h3>
                    </div>

                    <p className='text-gray-600 mb-4'>
                      Trở thành đối tác của Tấm Tắc để sở hữu mô hình kinh doanh ẩm thực hiệu quả với sự hỗ trợ toàn
                      diện từ đội ngũ chuyên nghiệp của chúng tôi.
                    </p>

                    <FranchiseForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
