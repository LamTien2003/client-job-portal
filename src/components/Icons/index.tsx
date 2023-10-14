export const ListColumn = ({color=''}) => {

    if(color === 'column') color = '#00A7AC'

    return (
        <svg fill={color} className={" duration-300 hover:fill-primary-100"} width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.91313 0C0.856731 0 0 0.893707 0 1.99656C0 3.09861 0.856731 3.99157 1.91313 3.99157C2.96953 3.99157 3.82626 3.09861 3.82626 1.99656C3.82626 0.893707 2.96953 0 1.91313 0Z"></path>
            <path d="M1.91313 6.00464C0.856731 6.00464 0 6.8976 0 8.00045C0 9.1025 0.856731 9.99621 1.91313 9.99621C2.96953 9.99621 3.82626 9.1025 3.82626 8.00045C3.82626 6.8976 2.96953 6.00464 1.91313 6.00464Z"></path>
            <path d="M1.91313 12.0085C0.856731 12.0085 0 12.9023 0 14.0043C0 15.1064 0.856731 16.0001 1.91313 16.0001C2.96953 16.0001 3.82626 15.1064 3.82626 14.0043C3.82626 12.9023 2.96953 12.0085 1.91313 12.0085Z"></path>
            <path d="M20.561 0.495117H6.95229C6.15787 0.495117 5.51367 1.16716 5.51367 1.99665C5.51367 2.82545 6.15782 3.49744 6.95229 3.49744H20.561C21.3554 3.49744 21.9996 2.82545 21.9996 1.99665C21.9996 1.16716 21.3554 0.495117 20.561 0.495117Z"></path>
            <path d="M20.561 6.49878H6.95229C6.15787 6.49878 5.51367 7.17077 5.51367 8.00032C5.51367 8.82911 6.15782 9.5011 6.95229 9.5011H20.561C21.3554 9.5011 21.9996 8.82911 21.9996 8.00032C21.9996 7.17077 21.3554 6.49878 20.561 6.49878Z"></path>
            <path d="M20.561 12.5034H6.95229C6.15787 12.5034 5.51367 13.1754 5.51367 14.0042C5.51367 14.833 6.15782 15.5049 6.95229 15.5049H20.561C21.3554 15.5049 21.9996 14.833 21.9996 14.0042C21.9996 13.1754 21.3554 12.5034 20.561 12.5034Z"></path>
        </svg>
    )
}

export const ListGutter = ({color=''}) => {
     
    if(color === 'gutter') color = '#00A7AC'

    return (
        <svg fill={color} className=" duration-300 hover:fill-primary-100" width='16px' height='16px' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.26106 6.95674H0.695674C0.311464 6.95674 0 6.64527 0 6.26106V0.695674C0 0.311464 0.311464 0 0.695674 0H6.26106C6.64527 0 6.95674 0.311464 6.95674 0.695674V6.26106C6.95674 6.64527 6.64527 6.95674 6.26106 6.95674Z"></path>
            <path d="M15.304 6.95674H9.73864C9.35443 6.95674 9.04297 6.64527 9.04297 6.26106V0.695674C9.04297 0.311464 9.35443 0 9.73864 0H15.304C15.6882 0 15.9997 0.311464 15.9997 0.695674V6.26106C15.9997 6.64527 15.6882 6.95674 15.304 6.95674Z"></path>
            <path d="M6.26106 16.0004H0.695674C0.311464 16.0004 0 15.689 0 15.3048V9.73937C0 9.35517 0.311464 9.0437 0.695674 9.0437H6.26106C6.64527 9.0437 6.95674 9.35517 6.95674 9.73937V15.3048C6.95674 15.689 6.64527 16.0004 6.26106 16.0004Z"></path>
            <path d="M15.304 16.0004H9.73864C9.35443 16.0004 9.04297 15.689 9.04297 15.3048V9.73937C9.04297 9.35517 9.35443 9.0437 9.73864 9.0437H15.304C15.6882 9.0437 15.9997 9.35517 15.9997 9.73937V15.3048C15.9997 15.689 15.6882 16.0004 15.304 16.0004Z"></path>
        </svg>
    )
}

export function MesNot () {
    return (
        <svg width="16" height="12" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2C0 1.46957 0.210714 0.960859 0.585787 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585787 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V2.217L8 6.417L15 2.217V2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2ZM15 3.383L10.292 6.208L15 9.105V3.383ZM14.966 10.259L9.326 6.788L8 7.583L6.674 6.788L1.034 10.258C1.09083 10.4708 1.21632 10.6589 1.39099 10.7931C1.56566 10.9272 1.77975 11 2 11H14C14.2201 11 14.4341 10.9274 14.6088 10.7934C14.7834 10.6595 14.909 10.4716 14.966 10.259ZM1 9.105L5.708 6.208L1 3.383V9.105Z"></path>
        </svg>
    )
}

export function BellIcon () {
    return (
        <svg width="16" height="18" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.37408 0.0465755C8.67279 0.120485 8.89683 0.247189 9.12442 0.472435C9.4907 0.834944 9.60093 1.15874 9.60093 1.89079V2.33777L9.87831 2.43983C11.5497 3.05223 12.8263 4.40723 13.3028 6.08603C13.47 6.66323 13.4806 6.81809 13.5126 8.47929C13.5446 10.2109 13.5624 10.4326 13.7651 11.2597C13.9856 12.1501 14.3874 13.0546 14.9102 13.836C15.1378 14.1773 15.344 14.4378 15.8739 15.0431C16.0872 15.2895 16.009 15.6872 15.7174 15.835C15.5823 15.9019 15.5147 15.9054 13.093 15.9054H10.6038L10.5824 16.0251C10.49 16.5143 10.0561 17.1478 9.56537 17.5068C9.34845 17.6652 8.95728 17.8517 8.67635 17.9327C8.38831 18.0136 7.68776 18.0242 7.39616 17.9502C6.50002 17.7285 5.7568 17.0528 5.48654 16.2187L5.38696 15.9054H2.90481C0.490226 15.9054 0.419104 15.9019 0.283973 15.835C0.191514 15.7893 0.116836 15.7154 0.0706072 15.6239C-0.0645256 15.3634 -0.0111828 15.1769 0.280416 14.8672C1.18722 13.9063 1.90911 12.5795 2.23627 11.2597C2.43896 10.4432 2.4603 10.2144 2.48875 8.47929C2.52075 6.81457 2.53142 6.66675 2.69856 6.08251C3.17152 4.41075 4.50861 2.99943 6.15864 2.42224L6.40045 2.33777V1.89079C6.40045 1.16226 6.51069 0.834944 6.88052 0.468916C7.27881 0.0712128 7.83711 -0.0871639 8.37408 0.0465755ZM7.75177 1.12354C7.5384 1.23265 7.46728 1.39806 7.46728 1.79929V2.1266H8.00069H8.53411V1.79225C8.53055 1.39806 8.47721 1.26432 8.26384 1.13762C8.09315 1.03555 7.93668 1.03204 7.75177 1.12354ZM7.3606 3.21764C6.84852 3.29507 6.53203 3.39362 6.06262 3.61887C4.80732 4.22774 3.95742 5.30822 3.64448 6.68435C3.59469 6.89903 3.57691 7.25098 3.55558 8.54968C3.53068 9.88708 3.51646 10.225 3.45601 10.6086C3.22842 12.0375 2.74834 13.2799 1.98023 14.4167C1.84154 14.6243 1.71708 14.8073 1.71352 14.8214C1.70641 14.839 4.53706 14.8496 8.00069 14.8496C11.4643 14.8496 14.295 14.839 14.2879 14.8214C14.2808 14.8073 14.1598 14.6243 14.0212 14.4167C13.2566 13.2834 12.7694 12.0234 12.5454 10.6121C12.4849 10.2285 12.4707 9.88357 12.4458 8.54968C12.4245 7.25098 12.4067 6.89903 12.3569 6.68435C12.1578 5.80447 11.7595 5.08297 11.1336 4.46354C10.7389 4.0764 10.3762 3.82299 9.8712 3.58367C9.09241 3.21764 8.20695 3.08742 7.3606 3.21764ZM6.50713 15.9265C6.50713 16.0145 6.76673 16.3982 6.91609 16.5319C7.5384 17.095 8.44876 17.1021 9.07108 16.5495C9.23821 16.3982 9.43024 16.1307 9.47647 15.9829L9.49781 15.9054H8.00425C7.17924 15.9054 6.50713 15.916 6.50713 15.9265Z"></path>
            <path d="M13.5626 1.8943C13.6764 1.97173 14.1102 2.4363 14.3485 2.7425C15.2411 3.88986 15.8314 5.3786 15.963 6.82511C16.0199 7.43751 16.0127 7.64868 15.931 7.81057C15.8492 7.96895 15.6465 8.09213 15.4687 8.09213C15.1557 8.09213 14.9352 7.83169 14.9352 7.46214C14.9352 7.14891 14.8712 6.56819 14.7894 6.17401C14.5654 5.07593 13.9787 3.90393 13.2425 3.08389C12.7874 2.5806 12.766 2.54541 12.766 2.34128C12.766 2.14067 12.8407 1.99989 13.0007 1.8943C13.1394 1.8028 13.4239 1.80631 13.5626 1.8943Z"></path>
            <path d="M3.00065 1.8943C3.16067 1.99989 3.23535 2.14067 3.23535 2.3448C3.23535 2.54541 3.22824 2.55597 2.74461 3.10149C2.01206 3.92505 1.43241 5.08648 1.21194 6.17401C1.13014 6.56819 1.06614 7.14891 1.06614 7.46214C1.06614 7.83169 0.845657 8.09213 0.532721 8.09213C0.354917 8.09213 0.152219 7.96895 0.0704293 7.81057C-0.0113609 7.6522 -0.0184731 7.43399 0.0348682 6.84271C0.173556 5.36452 0.781648 3.84058 1.6849 2.70731C1.96583 2.35536 2.3001 1.99285 2.42456 1.90486C2.57392 1.8028 2.85129 1.79928 3.00065 1.8943Z"></path>
        </svg>
    )
}

export function Profile () {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9C18 4.02595 13.9747 0 9 0C4.02599 0 0 4.02525 0 9C0 13.8465 3.87552 17.9204 8.85554 17.9982C8.94013 18.002 9.12386 17.9985 9.12741 17.9985C9.12888 17.9985 9.13514 17.9984 9.13679 17.9983C14.0497 17.9256 18 13.922 18 9ZM9 0.527344C13.6826 0.527344 17.4727 4.31677 17.4727 9C17.4727 10.9522 16.8164 12.8032 15.6091 14.3022C15.5881 13.3575 14.9755 12.5368 14.0707 12.2503L12.3649 11.7102C12.2684 11.6276 12.2938 11.6632 10.7234 10.8851V10.1543C11.4081 9.66815 11.8822 8.90072 11.9694 8.01584C12.2945 7.96071 12.5428 7.67707 12.5428 7.33655C12.5428 6.83149 12.5428 5.1711 12.5428 4.65304C12.5428 4.06216 12.0621 3.58147 11.4713 3.58147H11.4441C11.439 3.58147 11.4349 3.57736 11.4349 3.5723C11.4349 2.98143 10.9542 2.50073 10.3633 2.50073H7.57923C6.40856 2.50073 5.45618 3.45312 5.45618 4.62379C5.45618 4.7694 5.57423 4.88746 5.71985 4.88746C5.86547 4.88746 5.98352 4.7694 5.98352 4.62379C5.98352 3.74389 6.69934 3.02808 7.57923 3.02808H10.3633C10.6634 3.02808 10.9075 3.2722 10.9075 3.5723C10.9075 3.86814 11.1482 4.10882 11.4441 4.10882H11.4713C11.7714 4.10882 12.0155 4.35294 12.0155 4.65304V6.15357H11.7209C11.5563 6.15357 11.4224 6.01966 11.4224 5.8551V5.54745C11.4224 4.96266 10.8515 4.5501 10.2963 4.73361C9.46037 5.00991 8.53956 5.00998 7.70252 4.73347C7.14723 4.5501 6.57654 4.96266 6.57654 5.54734V5.8551C6.57654 6.0197 6.44263 6.15361 6.27806 6.15361H5.98349V5.84237C5.98349 5.69675 5.86543 5.5787 5.71982 5.5787C5.5742 5.5787 5.45614 5.69675 5.45614 5.84237V7.33658C5.45614 7.67714 5.70449 7.96075 6.02961 8.01591C6.11677 8.90082 6.59092 9.66821 7.27555 10.1544V10.8854C5.70839 11.662 5.7291 11.6293 5.63428 11.7105L3.92931 12.2503C3.02456 12.5368 2.41196 13.3575 2.39098 14.3023C1.18361 12.8032 0.527344 10.9522 0.527344 9C0.527344 4.3174 4.31677 0.527344 9 0.527344ZM5.97706 13.7489L6.18198 13.5444C6.39587 13.3309 6.44646 13.0069 6.30791 12.7383L5.98282 12.108L7.04827 11.5846C6.93489 12.0588 6.93858 12.58 6.99318 13.0684C6.99321 13.0688 6.99328 13.0692 6.99332 13.0695C7.12969 14.2874 7.62683 15.6689 8.12366 16.7889C7.30547 15.9655 6.21204 14.7544 5.93666 13.9148C5.9175 13.8565 5.933 13.7929 5.97706 13.7489ZM5.98345 6.68092H6.27803C6.73341 6.68092 7.10385 6.31044 7.10385 5.85506V5.5473C7.10385 5.32332 7.32203 5.16322 7.53813 5.23452C8.48081 5.5459 9.51912 5.54586 10.4618 5.23431C10.6754 5.16375 10.8951 5.32238 10.8951 5.54745V5.8551C10.8951 6.31048 11.2655 6.68092 11.7209 6.68092H12.0155V7.33655C12.0155 7.4257 11.943 7.4982 11.8538 7.4982C11.6417 7.4982 11.465 7.6647 11.4516 7.87729C11.3702 9.16734 10.2932 10.1779 8.99947 10.1779C7.70583 10.1779 6.62871 9.16734 6.54736 7.87729C6.53396 7.66473 6.35727 7.4982 6.14514 7.4982C6.05598 7.4982 5.98349 7.4257 5.98349 7.33655V6.68092H5.98345ZM8.99975 17.4124C8.82865 17.0692 8.5976 16.5802 8.36648 16.0129L8.79947 14.31H9.2005L9.6332 16.0124C9.40166 16.5809 9.17033 17.0703 8.99975 17.4124ZM8.65315 12.7027C8.50391 12.8274 8.19777 13.0831 7.95843 13.283C7.90847 13.3247 7.83693 13.3245 7.7875 13.2839L7.50881 12.9393C7.46272 12.4771 7.46729 11.9661 7.61164 11.5286L8.65315 12.7027ZM7.8724 13.8421C7.93962 13.8421 8.0068 13.8312 8.07173 13.8106L8.30679 14.1077L8.04125 15.1521C7.88917 14.7136 7.75206 14.2564 7.65127 13.8032C7.72267 13.8286 7.79737 13.8421 7.8724 13.8421ZM9.27341 13.7827H8.72205L8.5075 13.5115L9.02869 13.0761L9.50013 13.4792L9.27341 13.7827ZM10.0509 13.2563L9.40187 12.7014L10.3909 11.5383C10.5318 11.9728 10.5359 12.4761 10.4916 12.9287L10.2221 13.2589C10.1721 13.2992 10.1005 13.2988 10.0509 13.2563ZM8.99947 10.7052C9.42377 10.7052 9.82874 10.6153 10.1961 10.4538V10.9533L9.02644 12.3288L7.80286 10.9495V10.4537C8.17017 10.6153 8.57514 10.7052 8.99947 10.7052ZM9.95846 15.1513L9.69209 14.1033L9.93157 13.7828C9.99872 13.805 10.0684 13.8166 10.1381 13.8166C10.211 13.8166 10.2835 13.8038 10.3531 13.7798C10.2525 14.2379 10.1146 14.701 9.95846 15.1513ZM2.91727 14.8972V14.3523C2.91727 13.6176 3.38794 12.9748 4.08843 12.7531L5.49415 12.308C5.50821 12.3409 5.49376 12.3092 5.83924 12.9801C5.87211 13.0438 5.86013 13.1206 5.80943 13.1712L5.6045 13.3757C5.41877 13.5611 5.35402 13.8307 5.43558 14.0792C5.77213 15.1051 7.09611 16.5258 8.0048 17.4148C6.07549 17.1904 4.29476 16.3169 2.91727 14.8972ZM9.99461 17.4148C10.4846 16.9354 11.0989 16.2985 11.612 15.6535C11.7026 15.5395 11.6837 15.3737 11.5697 15.283C11.4558 15.1924 11.2899 15.2112 11.1992 15.3252C10.7852 15.8457 10.3012 16.3627 9.87465 16.7913C10.373 15.6684 10.872 14.2823 11.0071 13.0606C11.0071 13.0602 11.0072 13.0597 11.0072 13.0593C11.0608 12.5741 11.064 12.0574 10.9512 11.5846L12.0166 12.1081L11.6915 12.7384C11.553 13.007 11.6036 13.3309 11.8175 13.5444L12.0224 13.7489C12.0664 13.7929 12.0819 13.8565 12.0628 13.9148C12.0215 14.0408 11.9586 14.1822 11.876 14.3352C11.8067 14.4634 11.8545 14.6233 11.9826 14.6925C12.1108 14.7618 12.2707 14.714 12.3399 14.5859C12.4375 14.4053 12.5128 14.2348 12.5639 14.0792C12.6454 13.8306 12.5807 13.5611 12.3949 13.3757L12.19 13.1712C12.1393 13.1206 12.1274 13.0437 12.1602 12.9801C12.5031 12.314 12.4914 12.3403 12.5054 12.3079L13.9115 12.753C14.6121 12.9748 15.0827 13.6175 15.0827 14.3523V14.8972C13.7083 16.3137 11.9287 17.19 9.99461 17.4148Z"></path>
        </svg>
    )
}

export function Setting () {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1 10.5H10.77C10.6459 10.5002 10.5348 10.4228 10.4922 10.3062C10.4556 10.2102 10.4163 10.1163 10.374 10.0233C10.3214 9.9102 10.3454 9.77629 10.434 9.6885L10.6692 9.453C11.0184 9.10076 11.0177 8.53271 10.6677 8.1813L9.8199 7.3335C9.46804 6.9837 8.89976 6.9837 8.5479 7.3335L8.3127 7.5684C8.22472 7.65664 8.09104 7.6806 7.9779 7.6284C7.8849 7.5861 7.791 7.5468 7.6947 7.5084C7.57751 7.46606 7.49955 7.35461 7.5 7.23V6.9C7.5 6.40294 7.09706 6 6.6 6H5.4C4.90294 6 4.5 6.40294 4.5 6.9V7.23C4.50023 7.35413 4.42279 7.46516 4.3062 7.5078C4.2102 7.5444 4.1163 7.5837 4.0233 7.626C3.91016 7.67831 3.77644 7.65435 3.6885 7.566L3.453 7.3308C3.10118 6.98123 2.53313 6.98123 2.1813 7.3308L1.3335 8.1813C0.9837 8.53316 0.9837 9.10144 1.3335 9.4533L1.5684 9.6885C1.65698 9.77629 1.68098 9.9102 1.6284 10.0233C1.5861 10.1163 1.5468 10.2102 1.5099 10.3065C1.46696 10.4238 1.35487 10.5013 1.23 10.5H0.9C0.402938 10.5 0 10.9029 0 11.4V12.6C0 13.0971 0.402938 13.5 0.9 13.5H1.23C1.35413 13.4998 1.46516 13.5772 1.5078 13.6938C1.5444 13.7898 1.5837 13.8837 1.626 13.9767C1.67858 14.0898 1.65457 14.2237 1.566 14.3115L1.3308 14.547C0.981225 14.8988 0.981225 15.4669 1.3308 15.8187L2.1786 16.6665C2.53046 17.0163 3.09874 17.0163 3.4506 16.6665L3.6858 16.4316C3.77378 16.3434 3.90746 16.3194 4.0206 16.3716C4.1136 16.4139 4.2075 16.4532 4.3038 16.4916C4.42159 16.5335 4.50023 16.645 4.5 16.77V17.1C4.5 17.5971 4.90294 18 5.4 18H6.6C7.09706 18 7.5 17.5971 7.5 17.1V16.77C7.49978 16.6459 7.57721 16.5348 7.6938 16.4922C7.7898 16.4556 7.8837 16.4163 7.9767 16.374C8.08984 16.3217 8.22356 16.3456 8.3115 16.434L8.547 16.6692C8.89931 17.0182 9.46721 17.0175 9.8187 16.6677L10.6665 15.8199C11.0163 15.468 11.0163 14.8998 10.6665 14.5479L10.4316 14.3127C10.343 14.2249 10.319 14.091 10.3716 13.9779C10.4139 13.8849 10.4532 13.791 10.4916 13.6947C10.5339 13.5775 10.6454 13.4996 10.77 13.5H11.1C11.5971 13.5 12 13.0971 12 12.6V11.4C12 10.9029 11.5971 10.5 11.1 10.5ZM11.4 12.6C11.4 12.7657 11.2657 12.9 11.1 12.9H10.77C10.3971 12.9014 10.0633 13.1319 9.93 13.4802C9.8982 13.5642 9.86381 13.6469 9.8268 13.7283C9.67256 14.0688 9.74411 14.4692 10.0068 14.7351L10.2414 14.97C10.3586 15.0871 10.3587 15.2771 10.2416 15.3943C10.2415 15.3944 10.2415 15.3944 10.2414 15.3945L9.3936 16.2423C9.27645 16.3594 9.08655 16.3594 8.9694 16.2423L8.7342 16.0074C8.46836 15.7445 8.06786 15.6729 7.7274 15.8274C7.6461 15.8643 7.5633 15.8988 7.4799 15.9306C7.13186 16.0639 6.9015 16.3973 6.9 16.77V17.1C6.9 17.2657 6.76568 17.4 6.6 17.4H5.4C5.23433 17.4 5.1 17.2657 5.1 17.1V16.77C5.09861 16.3971 4.8681 16.0633 4.5198 15.93C4.4358 15.8982 4.35311 15.8638 4.2717 15.8268C3.9312 15.6726 3.53089 15.7442 3.2649 16.0068L3.03 16.2414C2.91293 16.3586 2.72295 16.3587 2.60573 16.2416C2.60565 16.2415 2.60558 16.2415 2.6055 16.2414L1.7577 15.3945C1.64059 15.2774 1.64059 15.0875 1.7577 14.9703L1.9926 14.7351C2.25529 14.4692 2.32684 14.0688 2.1726 13.7283C2.1357 13.647 2.1012 13.5642 2.0694 13.4808C1.93642 13.1324 1.6029 12.9017 1.23 12.9H0.9C0.734325 12.9 0.6 12.7657 0.6 12.6V11.4C0.6 11.2343 0.734325 11.1 0.9 11.1H1.23C1.60294 11.0986 1.93669 10.8681 2.07 10.5198C2.1018 10.4358 2.13619 10.3531 2.1732 10.2717C2.32744 9.9312 2.25585 9.53085 1.9932 9.2649L1.7574 9.03C1.64017 8.91293 1.64006 8.72295 1.75718 8.60572C1.75725 8.60565 1.75733 8.60557 1.7574 8.6055L2.6052 7.7577C2.72235 7.64059 2.91225 7.64059 3.0294 7.7577L3.2646 7.9926C3.53044 8.25551 3.93094 8.3271 4.2714 8.1726C4.3527 8.1357 4.4355 8.1012 4.5189 8.0694C4.86742 7.93654 5.09831 7.60298 5.1 7.23V6.9C5.1 6.73432 5.23433 6.6 5.4 6.6H6.6C6.76568 6.6 6.9 6.73432 6.9 6.9V7.23C6.90139 7.60294 7.1319 7.93669 7.4802 8.07C7.5642 8.1018 7.64689 8.13619 7.7283 8.1732C8.06876 8.3277 8.46926 8.25611 8.7351 7.9932L8.97 7.7586C9.0876 7.64227 9.2769 7.64227 9.3945 7.7586L10.2423 8.6064C10.3594 8.72355 10.3594 8.91345 10.2423 9.0306L10.0074 9.2658C9.74475 9.53175 9.67316 9.9321 9.8274 10.2726C9.8643 10.3539 9.8988 10.4367 9.9306 10.5201C10.0639 10.8681 10.3973 11.0985 10.77 11.1H11.1C11.2657 11.1 11.4 11.2343 11.4 11.4V12.6Z"></path>
            <path d="M8.6939 11.88C8.6909 11.808 8.6858 11.7363 8.6771 11.6649C8.6675 11.5881 8.6561 11.5119 8.6402 11.4372C8.6297 11.3883 8.6159 11.34 8.6027 11.2914C8.5859 11.2296 8.567 11.1687 8.546 11.1087C8.5313 11.067 8.516 11.0256 8.5004 10.9845C8.46177 10.8885 8.4176 10.7947 8.3681 10.7037C8.3642 10.6968 8.3618 10.6893 8.3579 10.6824C8.27986 10.5435 8.18948 10.4119 8.0879 10.2891C8.0792 10.2783 8.0693 10.2681 8.0603 10.2576C8.0189 10.2087 7.9763 10.1613 7.9316 10.116C7.9082 10.0917 7.8836 10.0689 7.859 10.0455C7.829 10.0176 7.799 9.99005 7.769 9.96365C7.73258 9.93204 7.6955 9.90144 7.6577 9.87185L7.6085 9.83525C7.14428 9.48755 6.57987 9.29975 5.9999 9.30005C5.9699 9.30005 5.9399 9.30455 5.9099 9.30575C5.846 9.30755 5.7818 9.31115 5.7173 9.31775C5.6834 9.32135 5.6492 9.32525 5.6153 9.33005C5.5175 9.34291 5.42045 9.36106 5.3246 9.38435C3.88006 9.75762 3.01163 11.2313 3.38491 12.6758C3.63091 13.6277 4.37461 14.3708 5.3267 14.616C5.3315 14.616 5.3366 14.6175 5.3417 14.6187C5.44531 14.6446 5.55027 14.6646 5.6561 14.6788C5.726 14.6874 5.7959 14.6892 5.8661 14.6925C5.9129 14.6949 5.9561 14.7018 6.005 14.7018C6.0905 14.7018 6.1793 14.6961 6.2699 14.6872C6.2795 14.6872 6.2891 14.6844 6.2999 14.6832C6.3728 14.6751 6.4466 14.6644 6.5219 14.6494C6.5519 14.6437 6.5798 14.6361 6.6086 14.6295C6.6614 14.6172 6.7139 14.6043 6.7679 14.5884C6.8099 14.5758 6.8507 14.5611 6.8918 14.5467C6.9329 14.5323 6.9755 14.5167 7.0181 14.5005C7.0607 14.4843 7.0964 14.4657 7.1351 14.4477C7.1855 14.4246 7.2356 14.4018 7.2851 14.3748H7.2869C7.56687 14.225 7.82547 14.0382 8.0558 13.8195C8.11801 13.7615 8.17212 13.6953 8.2166 13.6227C8.45075 13.2474 8.60457 12.8276 8.6684 12.3897C8.6768 12.3318 8.6843 12.2739 8.6888 12.2148C8.693 12.1605 8.696 12.1065 8.6972 12.0525C8.6972 12.0354 8.6996 12.0192 8.6996 12.0021C8.6999 11.9598 8.6957 11.9208 8.6939 11.88ZM8.096 12.0765C8.096 12.1014 8.0939 12.1263 8.0924 12.1509C8.087 12.2235 8.0777 12.2961 8.0654 12.369C7.95327 12.9928 7.56601 13.5328 7.0112 13.839C6.974 13.8585 6.9374 13.8768 6.9008 13.8936L6.8759 13.9056C6.7016 13.9848 6.51762 14.0405 6.3287 14.0712C6.3155 14.0733 6.302 14.0757 6.2885 14.0775C6.251 14.0829 6.2141 14.0875 6.1775 14.0907C6.1292 14.0949 6.0806 14.0973 6.0311 14.0982C6.0101 14.0982 5.9894 14.0982 5.9684 14.0982C5.89741 14.0974 5.82653 14.093 5.756 14.085L5.72 14.0808C5.6375 14.07 5.55567 14.0546 5.4749 14.0346C4.35132 13.7471 3.67362 12.6031 3.96117 11.4795C4.15118 10.7371 4.73056 10.1571 5.4728 9.96635V9.96605C5.64515 9.92259 5.82215 9.90039 5.9999 9.90005C6.08566 9.90054 6.17135 9.90635 6.2564 9.91745C6.2792 9.92015 6.3017 9.92435 6.3242 9.92765C6.389 9.93785 6.4532 9.95075 6.5165 9.96695C6.5372 9.97235 6.5579 9.97715 6.5783 9.98285C6.73782 10.0289 6.89138 10.0935 7.0358 10.1754C7.0589 10.1889 7.0814 10.203 7.1042 10.2171C7.1516 10.2471 7.1975 10.2771 7.2428 10.3113C7.2671 10.329 7.2917 10.3464 7.3151 10.3653C7.37397 10.4124 7.43033 10.4624 7.484 10.5153C7.5053 10.5369 7.5248 10.5606 7.5455 10.5831C7.58 10.6206 7.6136 10.659 7.6457 10.6995C7.6679 10.7274 7.6892 10.7562 7.7102 10.7853C7.7402 10.8285 7.7702 10.8735 7.7972 10.9191C7.8122 10.944 7.8272 10.9683 7.8425 10.9938C7.8812 11.0651 7.91566 11.1385 7.9457 11.2137C7.9577 11.2437 7.9679 11.2737 7.9787 11.3037C7.9982 11.3589 8.015 11.4147 8.0297 11.4711C8.0372 11.5011 8.0456 11.5278 8.0519 11.5569C8.06941 11.638 8.08212 11.7201 8.09 11.8026C8.0918 11.8245 8.0918 11.8467 8.0933 11.8686C8.0975 11.9376 8.0987 12.0069 8.096 12.0765Z"></path>
            <path d="M17.1002 6.3H16.1567C16.0309 6.30128 15.9183 6.22204 15.8771 6.1032C15.784 5.82454 15.6715 5.55274 15.5402 5.2899C15.4844 5.17639 15.5077 5.03993 15.5978 4.9512L16.2668 4.2813C16.6179 3.92989 16.6179 3.36041 16.2668 3.009L14.9912 1.7355C14.6398 1.38435 14.0703 1.38435 13.7189 1.7355L13.0502 2.4039C12.9616 2.49397 12.8253 2.5173 12.7118 2.4618C12.4489 2.32984 12.177 2.21666 11.8982 2.1231C11.7788 2.08226 11.699 1.96961 11.7002 1.8435V0.9C11.7002 0.402938 11.2972 0 10.8002 0H9.00016C8.5031 0 8.10016 0.402938 8.10016 0.9V1.8435C8.10144 1.96931 8.02224 2.08185 7.90336 2.1231C7.62466 2.21663 7.35286 2.32973 7.09006 2.4615C6.97655 2.51741 6.84001 2.4942 6.75136 2.4039L6.08146 1.7349C5.72964 1.38476 5.16099 1.38476 4.80916 1.7349L3.53596 3.0081C3.18463 3.35955 3.18463 3.92925 3.53596 4.2807L4.51966 5.2662C4.63865 5.38148 4.82859 5.37848 4.94386 5.25945C5.05633 5.14335 5.05659 4.959 4.94446 4.8426L3.96016 3.8574C3.84305 3.74025 3.84305 3.55035 3.96016 3.4332L5.23336 2.16C5.35051 2.04289 5.54041 2.04289 5.65756 2.16L6.32776 2.829C6.59893 3.10178 7.01443 3.16995 7.35856 2.9982C7.5962 2.87921 7.8419 2.77706 8.09386 2.6925C8.45754 2.56939 8.70174 2.22746 8.70016 1.8435V0.9C8.70016 0.734325 8.83449 0.6 9.00016 0.6H10.8002C10.9658 0.6 11.1002 0.734325 11.1002 0.9V1.8435C11.0986 2.22739 11.3428 2.5692 11.7065 2.6922C11.9585 2.7768 12.2044 2.87903 12.4421 2.9982C12.7863 3.16905 13.2012 3.1008 13.4726 2.8287L14.1428 2.16C14.2599 2.04289 14.4498 2.04289 14.567 2.16L15.8402 3.4335C15.9571 3.55061 15.9571 3.74029 15.8402 3.8574L15.1712 4.5276C14.8987 4.79891 14.8305 5.21423 15.002 5.5584C15.121 5.79604 15.2231 6.04174 15.3077 6.2937C15.4307 6.65745 15.7727 6.90165 16.1567 6.9H17.1002C17.2658 6.9 17.4002 7.03433 17.4002 7.2V9C17.4002 9.16568 17.2658 9.3 17.1002 9.3H16.1567C15.7728 9.29846 15.431 9.54266 15.308 9.9063C15.2234 10.1584 15.1211 10.4042 15.002 10.6419C14.8308 10.9861 14.8991 11.4012 15.1715 11.6724L15.8405 12.3426C15.9576 12.4598 15.9576 12.6497 15.8405 12.7668L14.5667 14.04C14.4496 14.1569 14.2599 14.1569 14.1428 14.04L13.157 13.0563C13.0417 12.9373 12.8518 12.9343 12.7328 13.0496C12.6137 13.1648 12.6107 13.3548 12.726 13.4738C12.7284 13.4762 12.7309 13.4787 12.7334 13.4811L13.7189 14.4648C14.0703 14.816 14.6398 14.816 14.9912 14.4648L16.2644 13.1919C16.6157 12.8405 16.6157 12.2708 16.2644 11.9193L15.5963 11.25C15.5063 11.1614 15.483 11.0251 15.5384 10.9116C15.6703 10.6487 15.7835 10.3769 15.8771 10.098C15.9179 9.97867 16.0306 9.89888 16.1567 9.9H17.1002C17.5972 9.9 18.0002 9.49706 18.0002 9V7.2C18.0002 6.70294 17.5972 6.3 17.1002 6.3Z"></path>
            <path d="M12.6575 5.34246C11.1336 3.82172 8.66623 3.82172 7.14231 5.34246C7.02722 5.46163 7.03052 5.65157 7.14969 5.76666C7.26594 5.87893 7.45026 5.87893 7.56651 5.76666C8.84657 4.46931 10.936 4.45532 12.2333 5.73538C13.5307 7.01544 13.5446 9.10483 12.2646 10.4022C12.2542 10.4127 12.2438 10.4231 12.2333 10.4335C12.1141 10.5486 12.1108 10.7385 12.226 10.8577C12.3411 10.9768 12.531 10.9801 12.6502 10.865C12.6526 10.8626 12.6551 10.8601 12.6575 10.8577C14.1782 9.33373 14.1782 6.86638 12.6575 5.34246Z"></path>
        </svg>
    )
}

export function Logout() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5998 12.3312C12.6886 12.3312 12.7773 12.2972 12.845 12.2297L15.8352 9.24479C15.9708 9.10944 15.9708 8.89067 15.8352 8.75532C15.6996 8.61997 15.4805 8.61997 15.3449 8.75532L12.3546 11.7403C12.219 11.8756 12.219 12.0944 12.3546 12.2297C12.4222 12.2972 12.511 12.3312 12.5998 12.3312Z"></path>
            <path d="M4.90684 14.234C5.0986 14.234 5.25361 14.0789 5.25361 13.8878V4.11227C5.25361 3.92119 5.0986 3.76611 4.90684 3.76611C4.71507 3.76611 4.56006 3.92119 4.56006 4.11227V13.8878C4.56006 14.0789 4.71541 14.234 4.90684 14.234Z"></path>
            <path d="M15.3449 9.24487C15.4125 9.31237 15.5013 9.34629 15.5901 9.34629C15.6788 9.34629 15.7676 9.31237 15.8352 9.24487C15.9708 9.10952 15.9708 8.89075 15.8352 8.7554L12.845 5.77046C12.7094 5.63511 12.4902 5.63511 12.3546 5.77046C12.219 5.90581 12.219 6.12458 12.3546 6.25993L15.3449 9.24487Z"></path>
            <path d="M5.3521 14.6783C5.54387 14.6783 5.69888 14.5232 5.69888 14.3321C5.69888 14.1411 5.54387 13.986 5.3521 13.986C5.298 13.986 5.25361 13.942 5.25361 13.8877C5.25361 13.6966 5.0986 13.5415 4.90684 13.5415C4.71507 13.5415 4.56006 13.6966 4.56006 13.8877C4.55971 14.3238 4.91516 14.6783 5.3521 14.6783Z"></path>
            <path d="M4.90684 4.45857C5.0986 4.45857 5.25361 4.30349 5.25361 4.11241C5.25361 4.05841 5.298 4.0141 5.3521 4.0141C5.54387 4.0141 5.69887 3.85902 5.69887 3.66794C5.69887 3.47686 5.54387 3.32178 5.3521 3.32178C4.91516 3.32178 4.56006 3.67625 4.56006 4.11241C4.56006 4.30383 4.71541 4.45857 4.90684 4.45857Z"></path>
            <path d="M1.07876 4.70121C-0.476885 7.54976 -0.340602 11.1554 1.42658 13.8866C2.73635 15.9113 4.84684 17.3461 7.21672 17.8231C7.80658 17.9418 8.402 18 8.99499 18C10.9213 18 12.8179 17.3842 14.3853 16.2194C14.5386 16.1051 14.5705 15.8881 14.456 15.7351C14.3419 15.5821 14.1252 15.5502 13.9709 15.6641C12.0792 17.0702 9.66774 17.6099 7.35369 17.1443C5.16622 16.7043 3.21803 15.3799 2.00916 13.511C0.378268 10.9899 0.252041 7.66192 1.6877 5.03248C3.13168 2.38851 5.99988 0.691629 9.01198 0.691629C9.03834 0.691629 9.06504 0.691629 9.09174 0.691975C12.1704 0.722783 15.0528 2.51659 16.4351 5.26199C17.7924 7.95788 17.5503 11.2956 15.8185 13.7647C15.7089 13.9215 15.7467 14.1372 15.9038 14.2469C16.0599 14.3563 16.277 14.3186 16.3869 14.1618C18.263 11.4866 18.5251 7.87134 17.0551 4.95079C15.5584 1.979 12.4392 0.0363469 9.10631 0H8.99326C5.73771 0.00726937 2.6396 1.8433 1.07876 4.70121Z"></path>
            <path d="M15.9368 9.00021C15.9368 8.80913 15.7817 8.65405 15.59 8.65405H7.13242C6.94065 8.65405 6.78564 8.80913 6.78564 9.00021C6.78564 9.19129 6.94065 9.34637 7.13242 9.34637H15.59C15.7817 9.34637 15.9368 9.19129 15.9368 9.00021Z"></path>
            <path d="M8.46794 13.9858H5.35215C5.16038 13.9858 5.00537 14.1409 5.00537 14.332C5.00537 14.5231 5.16038 14.6782 5.35215 14.6782H8.46794C8.65971 14.6782 8.81472 14.5231 8.81472 14.332C8.81472 14.1409 8.65971 13.9858 8.46794 13.9858Z"></path>
            <path d="M5.35215 4.01434H8.46794C8.65971 4.01434 8.81472 3.85926 8.81472 3.66818C8.81472 3.4771 8.65971 3.32202 8.46794 3.32202H5.35215C5.16038 3.32202 5.00537 3.4771 5.00537 3.66818C5.00537 3.85926 5.16038 4.01434 5.35215 4.01434Z"></path>
            <path d="M14.9721 14.7846C14.9097 14.8504 14.8716 14.9404 14.8716 15.0304C14.8716 15.1204 14.9097 15.2104 14.9756 15.2727C15.0384 15.3385 15.1282 15.3766 15.2184 15.3766C15.3123 15.3766 15.4022 15.3385 15.4646 15.2762C15.5305 15.2104 15.5651 15.1204 15.5651 15.0304C15.5651 14.9369 15.5305 14.8504 15.4646 14.7846C15.3363 14.6565 15.107 14.6531 14.9721 14.7846Z"></path>
        </svg>
    )
}

