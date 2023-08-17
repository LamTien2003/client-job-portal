import CategoryItem from './CategoryItem';
import Title from './Title';
import images from '@/assets/images';

const Section = () => {
    return (
        <div className="py-[120px]">
            <div className="flex flex-col max-w-7xl mx-auto">
                <div className="flex justify-center text-center"></div>
                <Title title="Category" subTitle="To choose your trending job dream & to make future bright.">
                    <div className="group">
                        <div className="flex items-center group-hover:cursor-pointer ">
                            <span className=" text-base font-medium group-hover:text-primary-100">Explore More</span>
                            <div className="ml-5 relative">
                                <img
                                    className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                    src={images.arrow}
                                    alt={images.arrow}
                                />
                                <img src={images.elliose} alt={images.elliose} />
                            </div>
                        </div>
                    </div>
                </Title>
                {/* Category -> Có data map ra cho gọn ! */}
                <div className="w-full grid grid-cols-5 grid-row-2 gap-3">
                    <CategoryItem title="Account & Finance" amount="44" index="01" images={images.categories.finance} />
                    <CategoryItem title="Technology" amount="04" index="02" images={images.categories.technology} />
                    <CategoryItem title="Medical & Nurse" amount="33" index="03" images={images.categories.medical} />
                    <CategoryItem
                        title="Marketing & Sales"
                        amount="56"
                        index="04"
                        images={images.categories.marketing}
                    />
                    <CategoryItem title="Design Jobs" amount="18" index="05" images={images.categories.design} />
                    <CategoryItem
                        title="Transportation"
                        amount="97"
                        index="06"
                        images={images.categories.transportation}
                    />
                    <CategoryItem title="Development" amount="67" index="07" images={images.categories.receotionist} />
                    <CategoryItem
                        title="Receptionist Job"
                        amount="55"
                        index="08"
                        images={images.categories.receotionist}
                    />
                    <CategoryItem title="Non-Profit Orag." amount="05" index="09" images={images.categories.profit} />
                    <CategoryItem title="Architect Jobs" amount="20" index="10" images={images.categories.architect} />
                </div>
            </div>
        </div>
    );
};

export default Section;
