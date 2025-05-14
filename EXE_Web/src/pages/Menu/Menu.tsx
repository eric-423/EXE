import { GET_PRODUCT_TYPE_QUERY_KEY, GET_PRODUCT_TYPE_STALE_TIME, getProductType } from '@/apis/product.api';
import image from '@/assets/images/Home - Banner.jpg';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import StyledHeading from '@/components/common/styled-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ChevronDown, Clock, Filter, Heart, MapPin, Plus, Search, ShoppingBag, Star } from 'lucide-react';
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
export default function MenuPage() {
  const [productType, setProductType] = useState<number>(0);

  const {
    data: productTypes,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: [GET_PRODUCT_TYPE_QUERY_KEY],
    queryFn: () => getProductType(),
    staleTime: GET_PRODUCT_TYPE_STALE_TIME,
  });

  console.log('productTypes', productTypes);

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-64 md:h-80 overflow-hidden'>
        <img src={image} alt='Tấm Tắc Menu' className='object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              <StyledHeading text='Thực đơn Tấm Tắc' />
            </h1>
            <p className='text-white/90 max-w-2xl mx-auto px-4'>
              <span className='text-background font-medium'>Tấm Tắc</span> là chuỗi hệ thống cơm tấm với mong muốn mang
              đến cho sinh viên những bữa cơm tấm chất lượng với giá cả hợp lý, đảm bảo vệ sinh an toàn thực phẩm
            </p>
          </div>
        </div>
      </div>

      {isFetching || isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* Search and Filter Bar */}
          <div className='sticky top-0 z-30 bg-white shadow-md py-4'>
            <div className='container mx-auto px-4'>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='relative flex-grow'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                  <Input
                    placeholder='Tìm kiếm món ăn...'
                    className='pl-10 bg-gray-50 border-none focus-visible:ring-primary'
                  />
                </div>
                <div className='flex gap-2'>
                  <Select>
                    <SelectTrigger className='w-[180px] bg-gray-50 border-none focus:ring-primary'>
                      <div className='flex items-center'>
                        <MapPin className='h-4 w-4 mr-2 text-primary' />
                        <SelectValue placeholder='Chọn cửa hàng' />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='all'>Tất cả cửa hàng</SelectItem>
                      <SelectItem value='lang-dai-hoc'>Láng Đại học</SelectItem>
                      <SelectItem value='thu-duc'>Thủ Đức</SelectItem>
                      <SelectItem value='quan-1'>Quận 1</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant='outline' className='flex items-center gap-2 border-gray-200'>
                    <Filter className='h-4 w-4' />
                    <span>Lọc</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className='container mx-auto px-4 py-8'>
            <div className='flex flex-col lg:flex-row gap-8'>
              {/* Sidebar */}
              <div className='lg:w-1/4'>
                <div className='bg-white rounded-xl shadow-sm p-6 sticky top-24'>
                  <h2 className='text-xl font-bold mb-6'>Danh mục</h2>

                  <div className='space-y-6'>
                    {/* Categories */}
                    <div>
                      <h3 className='text-sm uppercase text-gray-500 font-medium mb-3'>Thực đơn</h3>
                      <ul className='space-y-2'>
                        {productTypes?.map((category, index) => (
                          <li key={index}>
                            <button
                              className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors ${
                                productType == category.id
                                  ? 'bg-primary/10 text-primary font-medium'
                                  : 'hover:bg-primary/5'
                              }`}
                            >
                              <span>{category.name}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Locations */}
                    <div>
                      <h3 className='text-sm uppercase text-gray-500 font-medium mb-3'>Cửa hàng</h3>
                      <ul className='space-y-3'>
                        {[
                          { name: 'Tấm Tắc Láng Đại học', address: '268 Lý Thường Kiệt, Q.10' },
                          { name: 'Tấm Tắc Thủ Đức', address: 'Lô E2a-7, Đường D1, Thủ Đức' },
                          { name: 'Tấm Tắc Quận 1', address: '123 Nguyễn Huệ, Quận 1' },
                        ].map((store, index) => (
                          <li
                            key={index}
                            className='flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer'
                          >
                            <div className='w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0'>
                              <MapPin className='h-5 w-5 text-primary' />
                            </div>
                            <div>
                              <h4 className='font-medium text-sm'>{store.name}</h4>
                              <p className='text-xs text-gray-500'>{store.address}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className='lg:w-3/4'>
                {/* Category Tabs */}
                <Tabs defaultValue='all' className='mb-8'>
                  <div className='border-b border-gray-200'>
                    <TabsList className='bg-transparent h-auto p-0 mb-[-1px]'>
                      {[
                        { value: 'all', label: 'Tất cả' },
                        { value: 'popular', label: 'Phổ biến' },
                        { value: 'new', label: 'Món mới' },
                        { value: 'promotion', label: 'Khuyến mãi' },
                      ].map((tab) => (
                        <TabsTrigger
                          key={tab.value}
                          value={tab.value}
                          className='px-5 py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none'
                        >
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  <TabsContent value='all' className='mt-6'>
                    {/* Featured Item */}
                    <div className='mb-10'>
                      <div className='relative rounded-2xl overflow-hidden shadow-lg'>
                        <div className='absolute top-4 left-4 z-10'>
                          <Badge className='bg-primary hover:bg-[#C04A00]'>Món đặc trưng</Badge>
                        </div>
                        <div className='grid md:grid-cols-2'>
                          <div className='relative h-64 md:h-auto'>
                            <img src='/featured-dish.jpg' alt='Cơm Tấm Đặc Biệt' className='object-cover' />
                          </div>
                          <div className='bg-white p-6 md:p-8'>
                            <h2 className='text-2xl font-bold mb-2'>Cơm Tấm Đặc Biệt</h2>
                            <div className='flex items-center mb-4'>
                              <div className='flex items-center text-yellow-500 mr-4'>
                                <Star className='h-4 w-4 fill-yellow-500 mr-1' />
                                <span className='font-medium'>4.9</span>
                                <span className='text-gray-500 text-sm ml-1'>(120)</span>
                              </div>
                              <div className='flex items-center text-gray-500 text-sm'>
                                <Clock className='h-4 w-4 mr-1' />
                                <span>15-20 phút</span>
                              </div>
                            </div>
                            <p className='text-gray-600 mb-6'>
                              Món cơm tấm đặc biệt với sườn nướng mềm, bì giòn, chả trứng thơm ngon, trứng ốp la và đồ
                              chua. Phục vụ kèm canh tự chọn và nước ngọt.
                            </p>
                            <div className='flex items-center justify-between mb-6'>
                              <div>
                                <span className='text-3xl font-bold text-primary'>129.000đ</span>
                                <span className='text-gray-500 line-through ml-2'>149.000đ</span>
                              </div>
                              <Button variant='outline' size='icon' className='rounded-full border-gray-200'>
                                <Heart className='h-5 w-5 text-gray-500' />
                              </Button>
                            </div>
                            <Button className='w-full bg-primary hover:bg-[#C04A00] text-white'>
                              <ShoppingBag className='h-4 w-4 mr-2' />
                              Thêm vào giỏ hàng
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu Grid */}
                    <div>
                      <div className='flex items-center justify-between mb-6'>
                        <h2 className='text-xl font-bold'>Cơm Tấm</h2>
                        <Select defaultValue='popular'>
                          <SelectTrigger className='w-[180px] border-none bg-transparent focus:ring-0'>
                            <div className='flex items-center'>
                              <SelectValue placeholder='Sắp xếp theo' />
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='popular'>Phổ biến nhất</SelectItem>
                            <SelectItem value='price-asc'>Giá: Thấp đến cao</SelectItem>
                            <SelectItem value='price-desc'>Giá: Cao đến thấp</SelectItem>
                            <SelectItem value='rating'>Đánh giá cao nhất</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                        {Array.from({ length: 6 }).map((_, index) => (
                          <MenuItemCard key={index} />
                        ))}
                      </div>

                      <div className='mt-10 text-center'>
                        <Button
                          variant='outline'
                          className='px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white'
                        >
                          Hiển Thị Thêm Sản Phẩm
                          <ChevronDown className='ml-2 h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value='popular' className='mt-6'>
                    <div className='p-8 text-center'>
                      <h3 className='text-xl font-medium'>Các món ăn phổ biến sẽ hiển thị ở đây</h3>
                    </div>
                  </TabsContent>

                  <TabsContent value='new' className='mt-6'>
                    <div className='p-8 text-center'>
                      <h3 className='text-xl font-medium'>Các món ăn mới sẽ hiển thị ở đây</h3>
                    </div>
                  </TabsContent>

                  <TabsContent value='promotion' className='mt-6'>
                    <div className='p-8 text-center'>
                      <h3 className='text-xl font-medium'>Các món ăn khuyến mãi sẽ hiển thị ở đây</h3>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function MenuItemCard() {
  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group'>
      <div className='relative h-48'>
        <img
          src='/combo-dish.jpg'
          alt='COMBO - SÀ BÌ CHƯỞNG'
          className='object-cover group-hover:scale-105 transition-transform duration-300'
        />
        <div className='absolute top-3 right-3'>
          <div className='bg-white rounded-full p-1.5 shadow-md'>
            <Heart className='h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer' />
          </div>
        </div>
        <div className='absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center'>
          <Star className='h-3 w-3 text-yellow-500 fill-yellow-500 mr-1' />
          <span className='text-xs font-medium'>4.8</span>
          <span className='text-xs text-gray-500 ml-1'>(86)</span>
        </div>
      </div>
      <div className='p-4'>
        <h3 className='font-bold mb-1'>COMBO - SÀ BÌ CHƯỞNG</h3>
        <ul className='text-sm text-gray-600 mb-3'>
          <li>- Cơm sườn nướng, bì, chả trứng</li>
          <li>- Canh tự chọn</li>
          <li>- Nước ngọt tự chọn</li>
        </ul>
        <div className='flex items-center justify-between'>
          <span className='font-bold text-primary'>99.999đ</span>
          <Button size='sm' className='bg-primary hover:bg-[#C04A00]'>
            <Plus className='h-4 w-4 mr-1' />
            Thêm
          </Button>
        </div>
      </div>
    </div>
  );
}
