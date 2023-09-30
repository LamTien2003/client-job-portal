import CategoryItem from './CategoryItem';
import images from '@/assets/images';
const Category = () => {
    return (
        <div className="w-full grid grid-cols-5 grid-row-2 gap-3 mb:grid-cols-1 tb:grid-cols-2 lg:grid-cols-3 ">
            <CategoryItem title="Account Finance" amount="44" index="01" images={images.categories.finance} />
            <CategoryItem title="Technology" amount="04" index="02" images={images.categories.technology} />
            <CategoryItem title="Medical & Nurse" amount="33" index="03" images={images.categories.medical} />
            <CategoryItem title="Marketing & Sales" amount="56" index="04" images={images.categories.marketing} />
            <CategoryItem title="Design Jobs" amount="18" index="05" images={images.categories.design} />
            <CategoryItem title="Transportation" amount="97" index="06" images={images.categories.transportation} />
            <CategoryItem title="Development" amount="67" index="07" images={images.categories.receotionist} />
            <CategoryItem title="Receptionist Job" amount="55" index="08" images={images.categories.receotionist} />
            <CategoryItem title="Non-Profit Orag." amount="05" index="09" images={images.categories.profit} />
            <CategoryItem title="Architect Jobs" amount="20" index="10" images={images.categories.architect} />
        </div>
    );
};

export default Category;
