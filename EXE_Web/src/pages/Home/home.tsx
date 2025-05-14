import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Award, ChevronRight, Clock, MapPin, Phone, ShoppingBag, Sparkles, Star, Utensils } from 'lucide-react';

import BestSellerList from './components/best-seller-list';

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      {/* Why Choose Us Section */}
      <section className='relative pb-20 pt-10 overflow-hidden'>
        <div className='absolute inset-0 -z-10'>
          <div className='absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background' />
          <img src='/rice-pattern.png' alt='Rice pattern background' className='object-cover opacity-10' />
        </div>

        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center mb-12'>
            <div className='inline-block bg-primary/10 px-4 py-1 rounded-full mb-3'>
              <span className='text-primary font-medium'>Trải nghiệm ẩm thực</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-center my-6 relative'>
              <span className='relative inline-block'>
                TẠI SAO CHỌN CƠM
                <span className='text-primary'> TẤM TẮC</span>
                <svg
                  className='absolute -bottom-2 left-0 w-full h-full '
                  viewBox='0 0 200 8'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 5.5C32 1.5 62 1.5 101 5.5C138 9.5 170 9.5 199 5.5'
                    stroke='#F8A91F'
                    strokeWidth='2'
                    fill='none'
                    strokeLinecap='round'
                  />
                </svg>
              </span>
              ?
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: 'NGUYÊN LIỆU TƯƠI NGON',
                subtitle: 'ĂN TOÀN',
                icon: <Sparkles className='h-8 w-8 text-primary' />,
                img: '/food-1.png',
                description:
                  'Chúng tôi chỉ sử dụng những nguyên liệu tươi ngon nhất, được chọn lọc kỹ càng để đảm bảo hương vị tuyệt hảo cho mỗi món ăn.',
              },
              {
                title: 'CÔNG THỨC ĐỘC ĐÁO',
                subtitle: 'NGON CHUẨN VỊ',
                icon: <Award className='h-8 w-8 text-primary' />,
                img: '/food-2.png',
                description:
                  'Công thức độc quyền được phát triển bởi các đầu bếp hàng đầu, giữ trọn hương vị truyền thống Sài Gòn với chút biến tấu hiện đại.',
              },
              {
                title: 'GIÁ CẢ PHẢI CHĂNG',
                subtitle: 'CHẤT LƯỢNG CAO',
                icon: <ShoppingBag className='h-8 w-8 text-primary' />,
                img: '/food-3.png',
                description:
                  'Chúng tôi cam kết mang đến trải nghiệm ẩm thực chất lượng với mức giá hợp lý, phù hợp với mọi đối tượng khách hàng.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1'
              >
                <div className='absolute top-0 left-0 w-full h-48 overflow-hidden'>
                  <img
                    src={item.img || '/placeholder.svg'}
                    alt={item.title}
                    width={400}
                    height={300}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-black/30 to-transparent' />
                </div>

                <div className='pt-52 p-6'>
                  <div className='flex justify-between items-start mb-4'>
                    <div>
                      <h3 className='text-lg font-bold text-gray-900'>{item.title}</h3>
                      <p className='text-sm text-primary'>{item.subtitle}</p>
                    </div>
                    <div className='p-3 rounded-full bg-background'>{item.icon}</div>
                  </div>
                  <p className='text-gray-600'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className='py-20 bg-gradient-to-b from-secondary to-background relative'>
        <div className='absolute top-[-30px] left-0 w-[120%] z-0 h-25 bg-background rotate-3' />

        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center mb-12'>
            <div className='inline-block bg-background px-4 py-1 rounded-full mb-3'>
              <span className='text-primary font-medium'>Món ăn nổi bật</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-center'>BEST SELLERS</h2>
          </div>

          <BestSellerList />

          <div className='mt-12 text-center'>
            <Button variant='outline' className='border-primary text-primary hover:bg-primary hover:text-white'>
              Xem thêm món ăn
              <ChevronRight className='h-4 w-4 ml-2' />
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 relative'>
        <div className='absolute inset-0 -z-10'>
          <div className='absolute inset-0 bg-background/95' />
          <img src='/rice-pattern.png' alt='Rice pattern background' className='object-cover opacity-10' />
        </div>

        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center mb-12'>
            <div className='inline-block bg-primary/10 px-4 py-1 rounded-full mb-3'>
              <span className='text-primary font-medium'>Câu chuyện ẩm thực</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-center relative'>
              <span className='relative inline-block'>
                CHUYỆN CƠM TẤM
                <svg
                  className='absolute -bottom-2 left-0 w-full h-full'
                  viewBox='0 0 200 8'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 5.5C32 1.5 62 1.5 101 5.5C138 9.5 170 9.5 199 5.5'
                    stroke='#F8A91F'
                    strokeWidth='2'
                    fill='none'
                    strokeLinecap='round'
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className='group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className='aspect-square relative overflow-hidden'>
                  <img
                    src='/story-img.png'
                    alt={`Câu chuyện cơm tấm ${item}`}
                    width={300}
                    height={300}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4'>
                    <h3 className='text-white font-bold text-lg'>HỒI KÝ SÀI GÒN: CƠM TẤM</h3>
                    <p className='text-white/80 text-sm'>Tập {item}: HÀNH TRÌNH VỊ SÀI GÒN</p>
                    <Button
                      variant='link'
                      className='text-secondary p-0 mt-2 flex items-center justify-start hover:text-white'
                    >
                      Đọc tiếp
                      <ChevronRight className='h-4 w-4 ml-1' />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section className='py-20 bg-gradient-to-b from-secondary to-background relative'>
        <div className='absolute top-[-30px] left-0 w-[120%] z-0 h-25 bg-background rotate-3' />

        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center mb-12'>
            <div className='inline-block bg-background px-4 py-1 rounded-full mb-3'>
              <span className='text-primary font-medium'>Cơ hội kinh doanh</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-center'>HỆ THỐNG NHƯỢNG QUYỀN</h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <Tabs defaultValue='tphcm' className='w-full'>
                <TabsList className='grid w-full grid-cols-3 bg-background/80'>
                  <TabsTrigger value='tphcm'>TP.HCM</TabsTrigger>
                  <TabsTrigger value='hanoi'>Hà Nội</TabsTrigger>
                  <TabsTrigger value='danang'>Đà Nẵng</TabsTrigger>
                </TabsList>
                <TabsContent value='tphcm' className='mt-6'>
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className='mb-6 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow'
                    >
                      <div className='flex gap-4'>
                        <div className='w-24 h-24 rounded-lg overflow-hidden flex-shrink-0'>
                          <img
                            src='/franchise-img.png'
                            alt={`Tấm Tắc ${item}`}
                            width={100}
                            height={100}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='flex-grow'>
                          <h3 className='font-bold text-lg'>Tấm Tắc Láng Đại học</h3>
                          <div className='flex items-center mt-2 text-gray-600'>
                            <MapPin className='h-4 w-4 mr-2' />
                            <span className='text-sm'>268 Lý Thường Kiệt, Q.10, TP Hồ Chí Minh, gần ĐH Bách Khoa</span>
                          </div>
                          <div className='flex items-center mt-1 text-gray-600'>
                            <Phone className='h-4 w-4 mr-2' />
                            <span className='text-sm'>0902-123-456</span>
                          </div>
                        </div>
                      </div>
                      <div className='mt-4 flex justify-end'>
                        <Button
                          variant='outline'
                          size='sm'
                          className='text-primary border-primary hover:bg-primary hover:text-white'
                        >
                          Chỉ đường
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value='hanoi' className='mt-6'>
                  <div className='bg-white rounded-xl p-8 shadow-md text-center'>
                    <Utensils className='h-12 w-12 mx-auto text-primary/50 mb-4' />
                    <h3 className='text-xl font-bold mb-2'>Sắp ra mắt</h3>
                    <p className='text-gray-600'>
                      Chúng tôi sẽ sớm có mặt tại Hà Nội. Hãy đăng ký nhượng quyền ngay hôm nay!
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value='danang' className='mt-6'>
                  <div className='bg-white rounded-xl p-8 shadow-md text-center'>
                    <Utensils className='h-12 w-12 mx-auto text-primary/50 mb-4' />
                    <h3 className='text-xl font-bold mb-2'>Sắp ra mắt</h3>
                    <p className='text-gray-600'>
                      Chúng tôi sẽ sớm có mặt tại Đà Nẵng. Hãy đăng ký nhượng quyền ngay hôm nay!
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className='bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-32 h-32'>
                <svg viewBox='0 0 100 100' className='w-full h-full text-primary/10'>
                  <circle cx='90' cy='10' r='40' fill='currentColor' />
                </svg>
              </div>

              <div className='relative'>
                <div className='flex items-center mb-6'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4'>
                    <img src='/logo-icon.png' alt='Tấm Tắc Logo' width={30} height={30} />
                  </div>
                  <h3 className='text-2xl font-bold'>ĐĂNG KÝ NHƯỢNG QUYỀN</h3>
                </div>

                <p className='text-gray-600 mb-8'>
                  Trở thành đối tác của Tấm Tắc để sở hữu mô hình kinh doanh ẩm thực hiệu quả với sự hỗ trợ toàn diện từ
                  đội ngũ chuyên nghiệp của chúng tôi.
                </p>

                <form className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Họ tên</label>
                      <input
                        type='text'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all'
                        placeholder='Nhập họ tên của bạn'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Số điện thoại</label>
                      <input
                        type='tel'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all'
                        placeholder='Nhập số điện thoại'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                      <input
                        type='email'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all'
                        placeholder='Nhập email của bạn'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Khu vực</label>
                      <select className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none bg-white'>
                        <option value=''>Chọn khu vực</option>
                        <option value='tphcm'>TP. Hồ Chí Minh</option>
                        <option value='hanoi'>Hà Nội</option>
                        <option value='danang'>Đà Nẵng</option>
                        <option value='other'>Khác</option>
                      </select>
                    </div>
                  </div>

                  <Button className='w-full bg-primary hover:bg-[#C04A00] text-white py-3'>Đăng ký ngay</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
