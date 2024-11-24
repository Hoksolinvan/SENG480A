// costofliving ? https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Canada&country2=Canada&city1=Victoria%2C+BC&city2=Vancouver%2C+BC&tracking=getDispatchComparison

const ProgramList = [
	{
		id: 1,
		name: 'Computer Science',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-12-01',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 22000, // Tuition + living costs for Victoria, BC (Bachelor's)
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'
	},
	{
		id: 2,
		name: 'Business Administration',
		university: 'University of British Columbia',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-11-15',
		url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg',
		cost: 25000, // Vancouver has higher living costs (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'
	},
	{
		id: 3,
		name: 'Environmental Science',
		university: 'Thompson Rivers University',
		location: 'Kamloops, BC',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-10-30',
		url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg',
		cost: 20000, // Lower living costs in Kamloops, BC (Bachelor's)
		banner: 'https://lh4.googleusercontent.com/yGM3o6kPEEQPFiOthXkAiiZwMdnSgBNkvyXeuNlUK7HPJF3QjDTDw-cJmEzmPCqTqSLHvb_G-3JSbFy4moRLGkC_WJ8YadhjWwcTfsJRvFXe72rK1m0C_bLjNU9T5kfY_PwI95V5'
	},
	{
		id: 4,
		name: 'Mechanical Engineering',
		university: 'University of Calgary',
		location: 'Calgary, AB',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-12-05',
		url: 'https://ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba',
		cost: 23000, // Moderate costs for Calgary, AB (Bachelor's)
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'
	},
	{
		id: 5,
		name: 'Psychology',
		university: 'University of Alberta',
		location: 'Edmonton, AB',
		degreeType: 'Bachelor',
		admissionRate: 45,
		deadline: '2024-11-30',
		url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg',
		cost: 22000, // Moderate costs for Edmonton, AB (Bachelor's)
		banner: 'https://cdn.worldvectorlogo.com/logos/university-of-alberta-3.svg'
	},
	/*  { 
                id: 6, 
                name: 'Law', 
                university: 'University of British Columbia', 
                location: 'Vancouver, BC', 
                degreeType: 'Master', 
                admissionRate: 20, 
                deadline: '2024-12-20', 
                url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
                cost: 30000 // Higher cost for Master's in Vancouver, BC
        }, */
	{
		id: 7,
		name: 'Biology',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 50,
		deadline: '2024-11-25',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 24000, // Burnaby, BC, moderate cost (Bachelor's)
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'
	},
	{
		id: 8,
		name: 'Environmental Engineering',
		university: 'University of Calgary',
		location: 'Calgary, AB',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-12-10',
		url: 'https://ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba',
		cost: 23000, // Calgary, AB (Bachelor's)
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	{
		id: 9,
		name: 'Nursing',
		university: 'University of British Columbia',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 20,
		deadline: '2024-12-15',
		url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg',
		cost: 27000, // Nursing costs slightly higher in Vancouver, BC (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 10,
		name: 'Finance',
		university: 'University of Alberta',
		location: 'Edmonton, AB',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-11-20',
		url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg',
		cost: 22000, // Moderate costs for Edmonton, AB (Bachelor's)
		banner: 'https://cdn.worldvectorlogo.com/logos/university-of-alberta-3.svg'

		
	},
	{
		id: 11,
		name: 'Engineering Physics',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-11-25',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 23000, // Higher for engineering program in Victoria, BC
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 12,
		name: 'Biochemistry',
		university: 'University of Calgary',
		location: 'Calgary, AB',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-12-10',
		url: 'https://ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba',
		cost: 23000, // Calgary, AB (Bachelor's)
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	{
		id: 13,
		name: 'Arts and Sciences',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 50,
		deadline: '2024-11-30',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 21000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	/* { 
                id: 14, 
                name: 'Computer Science', 
                university: 'University of Alberta', 
                location: 'Edmonton, AB', 
                degreeType: 'Master', 
                admissionRate: 30, 
                deadline: '2024-12-15', 
                url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg', 
                cost: 28000 // Higher cost for Master's program in Edmonton, AB
        }, */
	{
		id: 15,
		name: 'Environmental Studies',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 45,
		deadline: '2024-11-20',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 24000, // Burnaby, BC, moderate cost
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	{
		id: 16,
		name: 'Political Science',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 45,
		deadline: '2024-12-15',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 22000, // Victoria, BC, moderate cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 17,
		name: 'Sociology',
		university: 'University of Calgary',
		location: 'Calgary, AB',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-11-20',
		url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba',
		cost: 23000, // Calgary, AB, moderate cost
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	{
		id: 18,
		name: 'Mathematics',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-12-05',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 21000, // Kelowna, BC, slightly lower cost
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 19,
		name: 'Economics',
		university: 'University of Alberta',
		location: 'Edmonton, AB',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-11-25',
		url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg',
		cost: 22000,
		banner: 'https://cdn.worldvectorlogo.com/logos/university-of-alberta-3.svg'
		// Edmonton, AB, moderate cost
	},
	{
		id: 20,
		name: 'Environmental Engineering',
		university: 'University of British Columbia',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-11-30',
		url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg',
		cost: 27000, // Vancouver, BC, higher cost
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 21,
		name: 'Film Studies',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 45,
		deadline: '2024-12-15',
		url: 'https://www.sfu.ca/content/sfu/sfucommunity/woodwards/photo-gallery/jcr:content/main_content/image_0.img.960.auto.jpg/1634310628497.jpg',
		cost: 24000, // Burnaby, BC, moderate cost
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	{
		id: 22,
		name: 'History',
		university: 'University of Calgary',
		location: 'Calgary, AB',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-11-20',
		url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba',
		cost: 23000, // Calgary, AB, moderate cost
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	{
		id: 23,
		name: 'Philosophy',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-12-05',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 21000, // Kelowna, BC, slightly lower cost
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 24,
		name: 'Education',
		university: 'University of Alberta',
		location: 'Edmonton, AB',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-11-25',
		url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg',
		cost: 22000, // Edmonton, AB, moderate cost
		banner: 'https://cdn.worldvectorlogo.com/logos/university-of-alberta-3.svg'

	},
	{
		id: 25,
		name: 'Geography',
		university: 'University of British Columbia',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-11-30',
		url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg',
		cost: 27000, // Vancouver, BC, higher cost
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 26,
		name: 'Indigenous Studies',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-12-05',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 22000, // Victoria, BC, moderate cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 27,
		name: 'Computer Science',
		university: 'University of Northern British Columbia',
		location: 'Prince George, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-12-01',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 20000, // Prince George, BC, lower cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 28,
		name: 'Anthropology',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-12-05',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 21000, // Kelowna, BC, slightly lower cost
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 29,
		name: 'Sustainable Energy Engineering',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-12-01',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 24000, // Burnaby, BC, moderate cost
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	{
		id: 30,
		name: 'Physics',
		university: 'University of Calgary',
		location: 'Calgary, AB',
		degreeType: 'Bachelor',
		admissionRate: 45,
		deadline: '2024-11-25',
		url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba',
		cost: 23000, // Calgary, AB, moderate cost
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	/* { 
                id: 31, 
                name: 'Architecture', 
                university: 'University of British Columbia', 
                location: 'Vancouver, BC', 
                degreeType: 'Master', 
                admissionRate: 25, 
                deadline: '2025-01-20', 
                url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
                cost: 32000 // Higher cost for Master's in Vancouver, BC
        }, */
	{
		id: 32,
		name: 'Human Resource Management',
		university: 'University of Alberta',
		location: 'Edmonton, AB',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-12-05',
		url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg',
		cost: 22000, // Moderate cost for Bachelor's in Edmonton, AB
		banner: 'https://cdn.worldvectorlogo.com/logos/university-of-alberta-3.svg'

	},
	/* { 
                id: 33, 
                name: 'Environmental Science', 
                university: 'University of Calgary', 
                location: 'Calgary, AB', 
                degreeType: 'Master', 
                admissionRate: 30, 
                deadline: '2025-01-10', 
                url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba', 
                cost: 30000 // Higher cost for Master's in Calgary, AB
        }, 
        { 
                id: 34, 
                name: 'Political Economy', 
                university: 'University of Victoria', 
                location: 'Victoria, BC', 
                degreeType: 'Master', 
                admissionRate: 20, 
                deadline: '2025-01-30', 
                url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg', 
                cost: 28000 // Higher cost for Master's in Victoria, BC
        }, */
	{
		id: 35,
		name: 'Public Relations',
		university: 'Royal Roads University',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 50,
		deadline: '2024-11-30',
		url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg',
		cost: 21000, // Lower cost for Bachelor's in Victoria, BC
		banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-uFGzPGqVPorT1XtyBVtssH5UjZIsLSU1w&s'
	},
	/* { 
                id: 36, 
                name: 'Data Science', 
                university: 'University of British Columbia', 
                location: 'Vancouver, BC', 
                degreeType: 'Master', 
                admissionRate: 15, 
                deadline: '2025-02-15', 
                url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
                cost: 33000 // High cost for Data Science Master's in Vancouver, BC
        }, */
	{
		id: 37,
		name: 'Sociology',
		university: 'University of Northern British Columbia',
		location: 'Prince George, BC',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-12-10',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 20000, // Lower cost for Bachelor's in Prince George, BC
		banner: 'https://www.cclmportal.ca/sites/default/files/images/2020-04/organization_unbc_logo_green_905x156.gif'
	},
	{
		id: 38,
		name: 'Nursing',
		university: 'Mount Royal University',
		location: 'Calgary, AB',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-11-15',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 23000, // Moderate cost for Nursing Bachelor's in Calgary, AB
		banner: 'https://www.mtroyal.ca/AboutMountRoyal/MarketingCommunications/_image/MRU_1c_logo_Outline_pms539.png'
	},
	{
		id: 39,
		name: 'Criminology',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-12-01',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 24000, // Moderate cost for Bachelor's in Burnaby, BC
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	/* { 
                id: 40, 
                name: 'Environmental Design', 
                university: 'University of Calgary', 
                location: 'Calgary, AB', 
                degreeType: 'Master', 
                admissionRate: 20, 
                deadline: '2025-01-25', 
                url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba', 
                cost: 31000 // Higher cost for Environmental Design Master's in Calgary, AB
        }, */
	{
		id: 41,
		name: 'Agriculture',
		university: 'University of British Columbia',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-11-20',
		url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg',
		cost: 27000, // Higher cost for Bachelor's in Vancouver, BC
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 42,
		name: 'Graphic Design',
		university: 'Emily Carr University of Art + Design',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-12-01',
		url: 'https://dsai.ca/wp-content/uploads/Emily-Carr-Hero.jpg',
		cost: 26000, // Moderate cost for Bachelor's in Vancouver, BC
		banner: 'https://www.globalheroes.com/wp-content/uploads/2024/05/ECUAD_Logo_Primary_Master_RGB_ECUAD_Logo_Primary_Colour_Black_RGB.png'
	},
	{
		id: 43,
		name: 'Music Composition',
		university: 'University of Alberta',
		location: 'Edmonton, AB',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-11-30',
		url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg',
		cost: 22000, // Moderate cost for Bachelor's in Edmonton, AB
		banner: 'https://cdn.worldvectorlogo.com/logos/university-of-alberta-3.svg'

	},
	{
		id: 44,
		name: 'Linguistics',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-12-10',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 22000, // Moderate cost for Bachelor's in Victoria, BC
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	

	//Van's pseudo data
	{
		id: 45,
		name: 'Computer Science',
		university: 'University of British Columbia Vancouver',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 20,
		deadline: '2024-11-15',
		url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg',
		cost: 30000, // Vancouver has higher living costs (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 46,
		name: 'Psychology',
		university: 'University of British Columbia Vancouver',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 50,
		deadline: '2024-10-20',
		url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg',
		cost: 27000, // Vancouver has higher living costs (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 47,
		name: 'Biology',
		university: 'University of British Columbia Vancouver',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-11-20',
		url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg',
		cost: 27000, // Vancouver has higher living costs (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 48,
		name: 'Economics',
		university: 'University of British Columbia Vancouver',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-11-15',
		url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg',
		cost: 30000, // Vancouver has higher living costs (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 49,
		name: 'Education',
		university: 'University of British Columbia Vancouver',
		location: 'Vancouver, BC',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-12-00',
		url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg',
		cost: 18000, // Vancouver has higher living costs (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 50,
		name: 'Business Administration',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-11-21',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 28000, // Burnaby, BC, moderate cost (Bachelor's)
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	{
		id: 51,
		name: 'Nursing',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 50,
		deadline: '2024-11-25',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 60000, // Burnaby, BC, moderate cost (Bachelor's)
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	{
		id: 52,
		name: 'Computer Science',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 41,
		deadline: '2024-11-25',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 24820, // Burnaby, BC, moderate cost (Bachelor's)
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	{
		id: 53,
		name: 'Psychology',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-11-25',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 28000, // Burnaby, BC, moderate cost (Bachelor's)
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	{
		id: 54,
		name: 'Electrical Engineering',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 41,
		deadline: '2024-11-25',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 28000, // Burnaby, BC, moderate cost (Bachelor's)
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	{
		id: 55,
		name: 'Economics',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 50,
		deadline: '2024-11-25',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 30000, // Burnaby, BC, moderate cost (Bachelor's)
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	{
		id: 56,
		name: 'Education',
		university: 'Simon Fraser University',
		location: 'Burnaby, BC',
		degreeType: 'Bachelor',
		admissionRate: 45,
		deadline: '2024-11-25',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s',
		cost: 18000, // Burnaby, BC, moderate cost (Bachelor's)
		banner: 'https://www.sfu.ca/content/sfu/communicators-toolkit/brand/guidelines/logos/logo-usage-guidelines/jcr:content/main_content/image_672850327.img.640.medium.png/1685743328658.png'

	},
	{
		id: 57,
		name: 'Business Administration',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-12-17',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 28000, // Tuition + living costs for Victoria, BC (Bachelor's)
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 58,
		name: 'Nursing',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-12-23',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 26000, // Tuition + living costs for Victoria, BC (Bachelor's)
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 59,
		name: 'Psychology',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-12-15',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 26000, // Tuition + living costs for Victoria, BC (Bachelor's)
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 60,
		name: 'Biology',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-12-17',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 32000, // Tuition + living costs for Victoria, BC (Bachelor's)
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 61,
		name: 'Civil Engineering',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-12-17',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 35000, // Tuition + living costs for Victoria, BC (Bachelor's)
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 62,
		name: 'Economics',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-12-10',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 24000, // Tuition + living costs for Victoria, BC (Bachelor's)
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 63,
		name: 'Education',
		university: 'University of Victoria',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-12-17',
		url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg',
		cost: 28000, // Tuition + living costs for Victoria, BC (Bachelor's)
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 64,
		name: 'Business Administration',
		university: 'Thompson Rivers University',
		location: 'Kamloops, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-10-30',
		url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg',
		cost: 27000, // Lower living costs in Kamloops, BC (Bachelor's)
		banner: 'https://lh4.googleusercontent.com/yGM3o6kPEEQPFiOthXkAiiZwMdnSgBNkvyXeuNlUK7HPJF3QjDTDw-cJmEzmPCqTqSLHvb_G-3JSbFy4moRLGkC_WJ8YadhjWwcTfsJRvFXe72rK1m0C_bLjNU9T5kfY_PwI95V5'

	},
	{
		id: 65,
		name: 'Nursing',
		university: 'Thompson Rivers University',
		location: 'Kamloops, BC',
		degreeType: 'Bachelor',
		admissionRate: 45,
		deadline: '2024-10-30',
		url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg',
		cost: 30000, // Lower living costs in Kamloops, BC (Bachelor's)
		banner: 'https://lh4.googleusercontent.com/yGM3o6kPEEQPFiOthXkAiiZwMdnSgBNkvyXeuNlUK7HPJF3QjDTDw-cJmEzmPCqTqSLHvb_G-3JSbFy4moRLGkC_WJ8YadhjWwcTfsJRvFXe72rK1m0C_bLjNU9T5kfY_PwI95V5'

	},
	{
		id: 66,
		name: 'Computer Science',
		university: 'Thompson Rivers University',
		location: 'Kamloops, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-10-30',
		url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg',
		cost: 28000, // Lower living costs in Kamloops, BC (Bachelor's)
		banner: 'https://lh4.googleusercontent.com/yGM3o6kPEEQPFiOthXkAiiZwMdnSgBNkvyXeuNlUK7HPJF3QjDTDw-cJmEzmPCqTqSLHvb_G-3JSbFy4moRLGkC_WJ8YadhjWwcTfsJRvFXe72rK1m0C_bLjNU9T5kfY_PwI95V5'

	},
	{
		id: 67,
		name: 'Psychology',
		university: 'Thompson Rivers University',
		location: 'Kamloops, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-10-30',
		url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg',
		cost: 26000, // Lower living costs in Kamloops, BC (Bachelor's)
		banner: 'https://lh4.googleusercontent.com/yGM3o6kPEEQPFiOthXkAiiZwMdnSgBNkvyXeuNlUK7HPJF3QjDTDw-cJmEzmPCqTqSLHvb_G-3JSbFy4moRLGkC_WJ8YadhjWwcTfsJRvFXe72rK1m0C_bLjNU9T5kfY_PwI95V5'

	},
	{
		id: 68,
		name: 'Biology',
		university: 'Thompson Rivers University',
		location: 'Kamloops, BC',
		degreeType: 'Bachelor',
		admissionRate: 20,
		deadline: '2024-10-30',
		url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg',
		cost: 32000, // Lower living costs in Kamloops, BC (Bachelor's)
		banner: 'https://lh4.googleusercontent.com/yGM3o6kPEEQPFiOthXkAiiZwMdnSgBNkvyXeuNlUK7HPJF3QjDTDw-cJmEzmPCqTqSLHvb_G-3JSbFy4moRLGkC_WJ8YadhjWwcTfsJRvFXe72rK1m0C_bLjNU9T5kfY_PwI95V5'

	},
	{
		id: 69,
		name: 'Civil Engineering',
		university: 'Thompson Rivers University',
		location: 'Kamloops, BC',
		degreeType: 'Bachelor',
		admissionRate: 29,
		deadline: '2024-10-30',
		url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg',
		cost: 28000, // Lower living costs in Kamloops, BC (Bachelor's)
		banner: 'https://lh4.googleusercontent.com/yGM3o6kPEEQPFiOthXkAiiZwMdnSgBNkvyXeuNlUK7HPJF3QjDTDw-cJmEzmPCqTqSLHvb_G-3JSbFy4moRLGkC_WJ8YadhjWwcTfsJRvFXe72rK1m0C_bLjNU9T5kfY_PwI95V5'

	},
	{
		id: 70,
		name: 'Economics',
		university: 'Thompson Rivers University',
		location: 'Kamloops, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-10-30',
		url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg',
		cost: 28000, // Lower living costs in Kamloops, BC (Bachelor's)
		banner: 'https://lh4.googleusercontent.com/yGM3o6kPEEQPFiOthXkAiiZwMdnSgBNkvyXeuNlUK7HPJF3QjDTDw-cJmEzmPCqTqSLHvb_G-3JSbFy4moRLGkC_WJ8YadhjWwcTfsJRvFXe72rK1m0C_bLjNU9T5kfY_PwI95V5'

	},
	{
		id: 71,
		name: 'Education',
		university: 'Thompson Rivers University',
		location: 'Kamloops, BC',
		degreeType: 'Bachelor',
		admissionRate: 29,
		deadline: '2024-10-30',
		url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg',
		cost: 18000, // Lower living costs in Kamloops, BC (Bachelor's)
		banner: 'https://lh4.googleusercontent.com/yGM3o6kPEEQPFiOthXkAiiZwMdnSgBNkvyXeuNlUK7HPJF3QjDTDw-cJmEzmPCqTqSLHvb_G-3JSbFy4moRLGkC_WJ8YadhjWwcTfsJRvFXe72rK1m0C_bLjNU9T5kfY_PwI95V5'

	},
	{
		id: 72,
		name: 'Computer Science',
		university: 'University of Northern British Columbia',
		location: 'Prince George, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-12-01',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 20000, // Prince George, BC, lower cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 73,
		name: 'Business Administration',
		university: 'University of Northern British Columbia',
		location: 'Prince George, BC',
		degreeType: 'Bachelor',
		admissionRate: 28,
		deadline: '2024-12-01',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 20000, // Prince George, BC, lower cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 74,
		name: 'Nursing',
		university: 'University of Northern British Columbia',
		location: 'Prince George, BC',
		degreeType: 'Bachelor',
		admissionRate: 20,
		deadline: '2024-12-01',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 32000, // Prince George, BC, lower cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 75,
		name: 'Psychology',
		university: 'University of Northern British Columbia',
		location: 'Prince George, BC',
		degreeType: 'Bachelor',
		admissionRate: 40,
		deadline: '2024-12-01',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 27000, // Prince George, BC, lower cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 76,
		name: 'Biology',
		university: 'University of Northern British Columbia',
		location: 'Prince George, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-12-01',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 27000, // Prince George, BC, lower cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 77,
		name: 'Electrical Engineering',
		university: 'University of Northern British Columbia',
		location: 'Prince George, BC',
		degreeType: 'Bachelor',
		admissionRate: 20,
		deadline: '2024-12-01',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 22000, // Prince George, BC, lower cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 78,
		name: 'Economics',
		university: 'University of Northern British Columbia',
		location: 'Prince George, BC',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-12-01',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 30000, // Prince George, BC, lower cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 79,
		name: 'Education',
		university: 'University of Northern British Columbia',
		location: 'Prince George, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-12-01',
		url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT',
		cost: 28000, // Prince George, BC, lower cost
		banner:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cengn.ca/wp-content/uploads/2021/08/509px-University_of_Victoria_Logo_and_Wordmark.svg_.png'

	},
	{
		id: 80,
		name: 'Business Administration',
		university: 'Royal Roads University',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-11-30',
		url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg',
		cost: 28000, // Lower cost for Bachelor's in Victoria, BC
		banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-uFGzPGqVPorT1XtyBVtssH5UjZIsLSU1w&s'

	},
	{
		id: 81,
		name: 'Nursing',
		university: 'Royal Roads University',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 20,
		deadline: '2024-11-30',
		url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg',
		cost: 31000, // Lower cost for Bachelor's in Victoria, BC
		banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-uFGzPGqVPorT1XtyBVtssH5UjZIsLSU1w&s'

	},
	{
		id: 82,
		name: 'Computer Science',
		university: 'Royal Roads University',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-11-30',
		url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg',
		cost: 27000, // Lower cost for Bachelor's in Victoria, BC
		banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-uFGzPGqVPorT1XtyBVtssH5UjZIsLSU1w&s'

	},
	{
		id: 83,
		name: 'Psychology',
		university: 'Royal Roads University',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 50,
		deadline: '2024-11-30',
		url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg',
		cost: 28000, // Lower cost for Bachelor's in Victoria, BC
		banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-uFGzPGqVPorT1XtyBVtssH5UjZIsLSU1w&s'

	},
	{
		id: 84,
		name: 'Biology',
		university: 'Royal Roads University',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 52,
		deadline: '2024-11-30',
		url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg',
		cost: 24000, // Lower cost for Bachelor's in Victoria, BC
		banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-uFGzPGqVPorT1XtyBVtssH5UjZIsLSU1w&s'

	},
	{
		id: 85,
		name: 'Mechanical Engineering',
		university: 'Royal Roads University',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-11-30',
		url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg',
		cost: 27000, // Lower cost for Bachelor's in Victoria, BC
		banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-uFGzPGqVPorT1XtyBVtssH5UjZIsLSU1w&s'

	},
	{
		id: 86,
		name: 'Economics',
		university: 'Royal Roads University',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 20,
		deadline: '2024-11-30',
		url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg',
		cost: 31000, // Lower cost for Bachelor's in Victoria, BC
		banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-uFGzPGqVPorT1XtyBVtssH5UjZIsLSU1w&s'

	},
	{
		id: 87,
		name: 'Education',
		university: 'Royal Roads University',
		location: 'Victoria, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-11-30',
		url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg',
		cost: 19000, // Lower cost for Bachelor's in Victoria, BC
		banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-uFGzPGqVPorT1XtyBVtssH5UjZIsLSU1w&s'

	},
	{
		id: 88,
		name: 'Business Administration',
		university: 'University of Alberta',
		location: 'Edmonton, AB',
		degreeType: 'Bachelor',
		admissionRate: 35,
		deadline: '2024-11-30',
		url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg',
		cost: 22000, // Moderate costs for Edmonton, AB (Bachelor's)
		banner: 'https://cdn.worldvectorlogo.com/logos/university-of-alberta-3.svg'

	},
	{
		id: 89,
		name: 'Business Administration',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-12-30',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 27000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 90,
		name: 'Nursing',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 45,
		deadline: '2024-11-30',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 29000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 91,
		name: 'Computer Science',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 20,
		deadline: '2024-11-17',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 30000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 92,
		name: 'Psychology',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 20,
		deadline: '2024-11-30',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 24000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 93,
		name: 'Biology',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-11-30',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 29000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 94,
		name: 'Electrical Engineering',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 30,
		deadline: '2024-11-30',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 27000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 95,
		name: 'Economics',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 25,
		deadline: '2024-11-30',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 24000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 96,
		name: 'Education',
		university: 'University of British Columbia Okanagan',
		location: 'Kelowna, BC',
		degreeType: 'Bachelor',
		admissionRate: 31,
		deadline: '2024-11-30',
		url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg',
		cost: 24000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png'

	},
	{
		id: 97,
		name: 'Business Administration',
		university: 'Kwantlen Polytechnic University',
		location: 'Surrey, BC',
		degreeType: 'Bachelor',
		admissionRate: 33,
		deadline: '2024-11-30',
		url: 'https://www.kpu.ca/sites/default/files/Summer_2024_reg.png',
		cost: 35000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://www.collegesinstitutes.ca/wp-content/uploads/2022/10/1_member_logo_kwantlen.jpg'

	},
	{
		id: 98,
		name: 'Nursing',
		university: 'Kwantlen Polytechnic University',
		location: 'Surrey, BC',
		degreeType: 'Bachelor',
		admissionRate: 33,
		deadline: '2024-12-30',
		url: 'https://www.kpu.ca/sites/default/files/Summer_2024_reg.png',
		cost: 32000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://www.collegesinstitutes.ca/wp-content/uploads/2022/10/1_member_logo_kwantlen.jpg'
	},
	{
		id: 99,
		name: 'Computer Science',
		university: 'Kwantlen Polytechnic University',
		location: 'Surrey, BC',
		degreeType: 'Bachelor',
		admissionRate: 20,
		deadline: '2024-11-30',
		url: 'https://www.kpu.ca/sites/default/files/Summer_2024_reg.png',
		cost: 30000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://www.collegesinstitutes.ca/wp-content/uploads/2022/10/1_member_logo_kwantlen.jpg'

	},
	{
		id: 100,
		name: 'Psychology',
		university: 'Kwantlen Polytechnic University',
		location: 'Surrey, BC',
		degreeType: 'Bachelor',
		admissionRate: 33,
		deadline: '2024-11-30',
		url: 'https://www.kpu.ca/sites/default/files/Summer_2024_reg.png',
		cost: 32000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://www.collegesinstitutes.ca/wp-content/uploads/2022/10/1_member_logo_kwantlen.jpg'

	},
	{
		id: 101,
		name: 'Mechanical Engineering',
		university: 'Kwantlen Polytechnic University',
		location: 'Surrey, BC',
		degreeType: 'Bachelor',
		admissionRate: 33,
		deadline: '2024-11-30',
		url: 'https://www.kpu.ca/sites/default/files/Summer_2024_reg.png',
		cost: 35000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://www.collegesinstitutes.ca/wp-content/uploads/2022/10/1_member_logo_kwantlen.jpg'

	},
	{
		id: 102,
		name: 'Economics',
		university: 'Kwantlen Polytechnic University',
		location: 'Surrey, BC',
		degreeType: 'Bachelor',
		admissionRate: 33,
		deadline: '2024-11-30',
		url: 'https://www.kpu.ca/sites/default/files/Summer_2024_reg.png',
		cost: 37000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://www.collegesinstitutes.ca/wp-content/uploads/2022/10/1_member_logo_kwantlen.jpg'

	},
	{
		id: 103,
		name: 'Education',
		university: 'Kwantlen Polytechnic University',
		location: 'Surrey, BC',
		degreeType: 'Bachelor',
		admissionRate: 33,
		deadline: '2024-11-29',
		url: 'https://www.kpu.ca/sites/default/files/Summer_2024_reg.png',
		cost: 10000, // Kelowna is slightly cheaper (Bachelor's)
		banner: 'https://www.collegesinstitutes.ca/wp-content/uploads/2022/10/1_member_logo_kwantlen.jpg'

	},
	{
		id: 104,
		name: "Business Administration",
		university: "MacEwan University",
		location: "Edmonton, AB",
		degreeType: "Bachelor",
		admissionRate: 33,
		deadline: "2024-11-29",
		url: "https://www.macewan.ca/business-administration/apply.png",
		cost: 10000,
		banner: 'https://upload.wikimedia.org/wikipedia/commons/7/75/MacEwanU-Logo.svg'
	},
	{
		id: 105,
		name: "Nursing",
		university: "MacEwan University",
		location: "Edmonton, AB",
		degreeType: "Bachelor",
		admissionRate: 20,
		deadline: "2024-12-15",
		url: "https://www.macewan.ca/nursing/apply.png",
		cost: 11000,
		banner: 'https://upload.wikimedia.org/wikipedia/commons/7/75/MacEwanU-Logo.svg'

	},
	{
		id: 106,
		name: "Computer Science",
		university: "MacEwan University",
		location: "Edmonton, AB",
		degreeType: "Bachelor",
		admissionRate: 45,
		deadline: "2024-11-30",
		url: "https://www.macewan.ca/computerscience/admissions.png",
		cost: 12000,
		banner: 'https://upload.wikimedia.org/wikipedia/commons/7/75/MacEwanU-Logo.svg'

	},
	{
		id: 107,
		name: "Psychology",
		university: "MacEwan University",
		location: "Edmonton, AB",
		degreeType: "Bachelor",
		admissionRate: 50,
		deadline: "2025-01-20",
		url: "https://www.macewan.ca/psychology/apply.png",
		cost: 9000,
		banner: 'https://upload.wikimedia.org/wikipedia/commons/7/75/MacEwanU-Logo.svg'

	},
	{
		id: 108,
		name: "Biology",
		university: "MacEwan University",
		location: "Edmonton, AB",
		degreeType: "Bachelor",
		admissionRate: 30,
		deadline: "2024-12-10",
		url: "https://www.macewan.ca/biology/admissions.png",
		cost: 10500,
		banner: 'https://upload.wikimedia.org/wikipedia/commons/7/75/MacEwanU-Logo.svg'

	},
	{
		id: 109,
		name: "Mechanical Engineering",
		university: "MacEwan University",
		location: "Edmonton, AB",
		degreeType: "Bachelor",
		admissionRate: 25,
		deadline: "2025-01-05",
		url: "https://www.macewan.ca/engineering/apply.png",
		cost: 13000,
		banner: 'https://upload.wikimedia.org/wikipedia/commons/7/75/MacEwanU-Logo.svg'

	},
	{
		id: 110,
		name: "Economics",
		university: "MacEwan University",
		location: "Edmonton, AB",
		degreeType: "Bachelor",
		admissionRate: 40,
		deadline: "2024-11-25",
		url: "https://www.macewan.ca/economics/admissions.png",
		cost: 9500,
		banner: 'https://upload.wikimedia.org/wikipedia/commons/7/75/MacEwanU-Logo.svg'

	},
	{
		id: 111,
		name: "Education",
		university: "MacEwan University",
		location: "Edmonton, AB",
		degreeType: "Bachelor",
		admissionRate: 35,
		deadline: "2025-02-01",
		url: "https://www.macewan.ca/education/apply.png",
		cost: 11000,
		banner: 'https://upload.wikimedia.org/wikipedia/commons/7/75/MacEwanU-Logo.svg'

	},
	{
		id: 112,
		name: "Business Administration",
		university: "University of Calgary",
		location: "Calgary, AB",
		degreeType: "Bachelor",
		admissionRate: 30,
		deadline: "2024-12-15",
		url: "https://ucalgary.ca/sites/default/files/business-admin.jpg",
		cost: 22000,
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	{
		id: 113,
		name: "Nursing",
		university: "University of Calgary",
		location: "Calgary, AB",
		degreeType: "Bachelor",
		admissionRate: 28,
		deadline: "2025-01-10",
		url: "https://ucalgary.ca/sites/default/files/nursing.jpg",
		cost: 23000,
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	{
		id: 114,
		name: "Computer Science",
		university: "University of Calgary",
		location: "Calgary, AB",
		degreeType: "Bachelor",
		admissionRate: 35,
		deadline: "2024-12-25",
		url: "https://ucalgary.ca/sites/default/files/computer-science.jpg",
		cost: 24000,
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	{
		id: 115,
		name: "Psychology",
		university: "University of Calgary",
		location: "Calgary, AB",
		degreeType: "Bachelor",
		admissionRate: 32,
		deadline: "2025-01-20",
		url: "https://ucalgary.ca/sites/default/files/psychology.jpg",
		cost: 21000,
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	{
		id: 116,
		name: "Biology",
		university: "University of Calgary",
		location: "Calgary, AB",
		degreeType: "Bachelor",
		admissionRate: 27,
		deadline: "2025-01-05",
		url: "https://ucalgary.ca/sites/default/files/biology.jpg",
		cost: 22000,
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	{
		id: 117,
		name: "Economics",
		university: "University of Calgary",
		location: "Calgary, AB",
		degreeType: "Bachelor",
		admissionRate: 29,
		deadline: "2024-12-18",
		url: "https://ucalgary.ca/sites/default/files/economics.jpg",
		cost: 22500,
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	},
	{
		id: 118,
		name: "Education",
		university: "University of Calgary",
		location: "Calgary, AB",
		degreeType: "Bachelor",
		admissionRate: 30,
		deadline: "2025-02-01",
		url: "https://ucalgary.ca/sites/default/files/education.jpg",
		cost: 21500,
		banner: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/UCalgary_Horizontal_logo_colour.jpg?itok=fTDRxDlp'

	}
	

];

export default ProgramList;
