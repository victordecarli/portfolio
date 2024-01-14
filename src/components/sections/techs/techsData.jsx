const Techs = [
  {
    id: 1,
    frontEnd: {
      title: 'Front-end',
      technologies: [
        {
          name: 'HTML',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#F16529"
                fillOpacity=".32"
                rx="10"
              />
              <path
                fill="#E44D26"
                d="M11.57 28.352 9.692 7.312h20.613l-1.878 21.037-8.44 2.34-8.419-2.337Z"
              />
              <path
                fill="#F16529"
                d="m20 28.9 6.82-1.891 1.606-17.977H20V28.9Z"
              />
              <path
                fill="#EBEBEB"
                d="M20 16.835h-3.415l-.236-2.642H20v-2.58h-6.47l.061.692.634 7.11H20v-2.58Zm0 6.702-.012.003-2.873-.776-.184-2.058h-2.59l.361 4.052 5.286 1.467.012-.003v-2.685Z"
              />
              <path
                fill="#FAFAFF"
                d="M19.991 16.835v2.58h3.178l-.3 3.348-2.878.776v2.685l5.29-1.466.04-.436.605-6.794.063-.693h-5.998Zm0-5.223v2.58h6.233l.052-.58.118-1.307.061-.693h-6.464Z"
              />
            </svg>
          ),
        },
        {
          name: 'CSS',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#33A9DC"
                fillOpacity=".33"
                rx="10"
              />
              <path
                fill="#1572B6"
                d="M11.528 28.398 9.642 7.254h20.716l-1.887 21.14-8.484 2.353-8.46-2.349Z"
              />
              <path
                fill="#33A9DC"
                d="m20 28.95 6.855-1.901 1.613-18.067H20V28.95Z"
              />
              <path
                fill="#fff"
                d="M20 16.643h3.432l.237-2.656H20v-2.593h6.503l-.062.696-.638 7.146H20v-2.593Z"
              />
              <path
                fill="#EBEBEB"
                d="m20.016 23.378-.012.003-2.888-.78-.185-2.068h-2.603l.364 4.072 5.312 1.474.012-.003v-2.698Z"
              />
              <path
                fill="#fff"
                d="m23.211 19.127-.312 3.472-2.892.781v2.698l5.316-1.473.039-.438.451-5.04h-2.602Z"
              />
              <path
                fill="#EBEBEB"
                d="M20.009 11.394v2.593h-6.264l-.052-.582-.118-1.315-.062-.696h6.496ZM20 16.644v2.593h-2.852l-.052-.583-.118-1.315-.062-.696H20Z"
              />
            </svg>
          ),
        },
        {
          name: 'JavaScript',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#F0DB4F"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="#F0DB4F"
                  d="M8.264 7.264h23.472v23.472H8.264V7.264Z"
                />
                <path
                  fill="#323330"
                  d="M29.815 25.138c-.172-1.07-.87-1.97-2.939-2.809-.718-.33-1.519-.567-1.758-1.111-.084-.317-.096-.495-.042-.687.154-.623.897-.817 1.486-.638.38.127.738.42.955.885 1.013-.655 1.01-.651 1.718-1.102-.259-.401-.397-.587-.567-.758-.609-.68-1.439-1.031-2.767-1.004l-.691.09c-.663.166-1.294.514-1.664.98-1.111 1.261-.795 3.468.557 4.376 1.332 1 3.29 1.227 3.54 2.162.242 1.145-.842 1.515-1.92 1.383-.794-.165-1.236-.569-1.713-1.303-.88.51-.88.51-1.783 1.029.214.468.44.68.799 1.086 1.7 1.725 5.955 1.64 6.718-.97.03-.09.236-.687.071-1.609Zm-8.79-7.086h-2.196l-.01 5.676c0 1.207.063 2.314-.133 2.653-.321.667-1.154.584-1.533.455-.386-.19-.582-.46-.81-.841-.062-.11-.11-.194-.125-.2l-1.785 1.092c.297.61.734 1.138 1.294 1.482.837.502 1.961.656 3.137.386.766-.223 1.426-.685 1.772-1.388.5-.922.392-2.037.388-3.27.011-2.014 0-4.026 0-6.045Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <rect width="24" height="24" x="8" y="7" fill="#fff" rx="5" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
        {
          name: 'TypeScript',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#007ACC"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="#fff"
                  d="M12.25 15.813H30.94v13.813H12.25V15.812Z"
                />
                <path
                  fill="#007ACC"
                  d="M8.281 18.983v11.719H31.72V7.264H8.28v11.72Zm18.887-.937c.562.13 1.072.424 1.466.843.218.227.407.478.563.75 0 .03-1.013.715-1.63 1.097-.022.015-.112-.082-.211-.23a1.329 1.329 0 0 0-1.101-.662c-.71-.049-1.168.324-1.164.937a.858.858 0 0 0 .1.439c.157.324.447.518 1.358.911 1.678.722 2.397 1.198 2.843 1.875.499.75.61 1.962.272 2.858-.375.975-1.294 1.637-2.593 1.856a7.18 7.18 0 0 1-1.785-.019 4.312 4.312 0 0 1-2.385-1.243c-.216-.238-.636-.859-.61-.904.069-.05.14-.096.216-.136l.868-.48.673-.39.14.208c.238.34.54.628.89.85.75.395 1.773.34 2.28-.115a1.018 1.018 0 0 0 .129-1.298c-.188-.26-.563-.48-1.61-.937-1.21-.522-1.731-.844-2.208-1.358a3.091 3.091 0 0 1-.643-1.172 4.687 4.687 0 0 1-.041-1.5c.25-1.168 1.125-1.983 2.404-2.225a5.935 5.935 0 0 1 1.78.048v-.003Zm-5.501.982v.96h-3.043v8.668h-2.158v-8.67h-3.051v-.937a9.22 9.22 0 0 1 .023-.97c.014-.017 1.874-.017 4.124-.017h4.094l.01.966Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <rect width="24" height="24" x="8" y="7" fill="#fff" rx="5" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
        {
          name: 'Sass',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#CD6799"
                fillOpacity=".33"
                rx="10"
              />
              <path
                fill="#CD6799"
                d="M20.128 21.025c-.36.166-.756.382-1.547.816-.3.169-.613.337-.905.496l-.062-.066c-1.565-1.673-4.46-2.854-4.337-5.1.046-.819.327-2.966 5.56-5.575 4.306-2.122 7.733-1.534 8.325-.23.85 1.859-1.837 5.319-6.284 5.82a3.352 3.352 0 0 1-2.814-.71c-.235-.256-.27-.271-.358-.22-.143.075-.05.306 0 .44a2.626 2.626 0 0 0 1.606 1.262 8.55 8.55 0 0 0 5.217-.516c2.696-1.044 4.8-3.944 4.184-6.376-.619-2.465-4.711-3.278-8.582-1.902a19.5 19.5 0 0 0-6.593 3.785c-2.133 1.995-2.47 3.729-2.332 4.455.496 2.578 4.05 4.256 5.474 5.498l-.194.107c-.71.354-3.421 1.77-4.097 3.269-.767 1.698.123 2.915.711 3.079a4.375 4.375 0 0 0 4.71-1.908 4.725 4.725 0 0 0 .42-4.35c.168-.135.348-.254.537-.358.363-.215.709-.426 1.015-.59a7.854 7.854 0 0 1 3.357-.741c2.434.286 2.915 1.805 2.823 2.445a1.617 1.617 0 0 1-.773 1.094c-.169.107-.225.143-.21.22.02.112.102.107.245.087a1.902 1.902 0 0 0 1.325-1.693c.075-1.5-1.355-3.145-3.887-3.13a5.815 5.815 0 0 0-2.537.59l.003.002Zm-3.619 5.88c-.808.879-1.933 1.211-2.419.93-.525-.3-.317-1.601.675-2.532a12.877 12.877 0 0 1 1.898-1.417c.117-.075.291-.174.5-.3l.057-.03.123-.076a3.493 3.493 0 0 1-.834 3.424Z"
              />
            </svg>
          ),
        },
        {
          name: 'Styled components',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#FBD56D"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="#FBD56D"
                  d="M14.018 18.524c-.093 1.18.944 2.05 1.651 2.05.71-.033 3.47-2.36 3.47-2.36 1.297-1.641 1.303-2.371 1.303-2.945-.108-2.533-4.724 1.325-6.424 3.255Zm11.418-.98c.626-1.326-.217-2.8-2.05-1.506-1.457.926-3.343 2.831-4.246 3.577-.419.846.643 3.166 2.325 1.941 1.988-1.444 3.44-2.802 3.97-4.013Zm1.706-8.021L27.546 7H32v4.605l-1.633.02-1.965 6.657c.122 2.35-1.07 2.388-1.222 3.466-.382 2.71-3.413 4.927-4.571 4.927-.773-.022-1.338-.908-1.528-1.68 2.18-2.41 5.109-4.303 5.109-4.303.183-1.268-.22-1.671 1.133-2.75l1.29-6.786c-1.101-.727-1.616-.716-1.471-1.633Zm-8.695 11.236c1.13 2.276 2.762 2.335 5.293-.563.06.268.126.549.005 1.223-5.148 4.605-9.998 9.087-11.474 9.581H8v-1.146c.695-.963 6.396-5.665 10.447-9.095Zm7.61 4.407c-.233 1.97-2.03 3.695-4.43 5.834H14.02l6.414-5.403c1.107 2.52 3.074 2.155 5.623-.43Zm-8.998-4.472L8 28.415v-5.01l5.331-4.34c.285 1.616 2.032 3.038 3.728 1.629Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M8 7h24v24H8z" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
        {
          name: 'TailwindCSS',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#38BDF8"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="#38BDF8"
                  d="M20 11.8c-3.2 0-5.199 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.914.228 1.566.89 2.29 1.624C21.665 17.618 23.026 19 26 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.912-.228-1.564-.89-2.288-1.624-1.175-1.194-2.537-2.576-5.511-2.576ZM14 19c-3.2 0-5.199 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.914.228 1.566.89 2.29 1.624C15.664 24.818 17.026 26.2 20 26.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.912-.228-1.564-.89-2.288-1.624C18.337 20.382 16.975 19 14.001 19Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M8 7h24v24H8z" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
        {
          name: 'React',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#61DAFB"
                fillOpacity=".33"
                rx="10"
              />
              <path
                fill="#61DAFB"
                d="M20 21.137a2.138 2.138 0 1 0 0-4.275 2.138 2.138 0 0 0 0 4.276Z"
              />
              <path
                fill="#61DAFB"
                d="M28.119 15.475c-.413-.15-.844-.3-1.294-.431.113-.45.206-.9.281-1.332.394-2.474-.037-4.218-1.237-4.893-.357-.207-.75-.3-1.2-.3-1.313 0-2.982.975-4.669 2.606-1.688-1.631-3.356-2.606-4.669-2.606-.45 0-.843.093-1.2.3-1.2.693-1.631 2.437-1.237 4.893.075.432.168.882.281 1.332-.45.131-.881.262-1.294.431-2.344.9-3.619 2.138-3.619 3.525s1.294 2.625 3.62 3.525c.412.15.843.3 1.293.431-.113.45-.206.9-.281 1.332-.394 2.474.037 4.218 1.237 4.893.357.206.75.3 1.2.3 1.331 0 3-.975 4.669-2.606 1.687 1.631 3.356 2.606 4.669 2.606.45 0 .843-.094 1.2-.3 1.2-.694 1.631-2.437 1.237-4.893a18.749 18.749 0 0 0-.281-1.332c.45-.131.881-.262 1.294-.431 2.343-.9 3.618-2.137 3.618-3.525 0-1.387-1.274-2.625-3.618-3.525Zm-2.775-5.719c.768.45 1.031 1.838.712 3.806-.056.394-.15.807-.262 1.238a22.285 22.285 0 0 0-3.094-.469 27.052 27.052 0 0 0-1.95-2.437c1.387-1.369 2.794-2.307 3.938-2.307.243 0 .468.057.656.17Zm-2.1 11.119c-.338.6-.732 1.2-1.144 1.8-.694.056-1.388.075-2.1.075-.731 0-1.425-.019-2.1-.075-.413-.6-.788-1.2-1.125-1.8A30.211 30.211 0 0 1 15.781 19c.3-.619.638-1.256.994-1.875.337-.6.731-1.2 1.144-1.8a25.863 25.863 0 0 1 2.1-.075c.73 0 1.425.019 2.1.075.412.6.787 1.2 1.125 1.8.356.619.693 1.256.993 1.875a61.688 61.688 0 0 1-.993 1.875Zm1.556-.619c.281.657.506 1.294.712 1.931-.637.15-1.312.263-2.025.357.225-.357.47-.732.675-1.125.225-.394.432-.788.638-1.163ZM20 25.337a21.047 21.047 0 0 1-1.294-1.556c.431.019.863.038 1.294.038.431 0 .863-.019 1.294-.038A21.07 21.07 0 0 1 20 25.337Zm-3.488-2.812a20.615 20.615 0 0 1-2.024-.356c.206-.619.43-1.275.712-1.931.206.375.413.768.638 1.143.224.413.45.769.675 1.144ZM15.2 17.744a22.08 22.08 0 0 1-.712-1.931c.637-.15 1.312-.263 2.024-.357-.224.357-.468.732-.675 1.125-.224.394-.43.788-.637 1.163Zm4.8-5.082c.45.488.881 1.013 1.294 1.557-.431-.019-.863-.038-1.294-.038-.431 0-.863.019-1.294.038.413-.544.844-1.069 1.294-1.556Zm4.162 3.938-.675-1.125c.713.094 1.388.206 2.025.356a24.573 24.573 0 0 1-.712 1.931 22.961 22.961 0 0 0-.638-1.162Zm-10.218-3.038c-.319-1.968-.057-3.356.712-3.806.188-.112.413-.169.656-.169 1.126 0 2.532.92 3.938 2.307a24.64 24.64 0 0 0-1.95 2.437 25.494 25.494 0 0 0-3.094.469c-.112-.431-.187-.844-.262-1.238ZM9.312 19c0-.881 1.07-1.819 2.944-2.512.375-.15.788-.282 1.2-.394.3.937.675 1.931 1.125 2.925-.45.994-.843 1.969-1.125 2.906-2.587-.75-4.144-1.875-4.144-2.925Zm5.344 9.244c-.769-.45-1.031-1.838-.712-3.806.056-.394.15-.807.262-1.238a22.27 22.27 0 0 0 3.094.469c.637.9 1.294 1.706 1.95 2.437-1.388 1.369-2.794 2.306-3.938 2.306-.243 0-.468-.056-.656-.168Zm11.4-3.806c.319 1.968.056 3.356-.712 3.806a1.267 1.267 0 0 1-.657.169c-1.125 0-2.53-.92-3.937-2.307a24.64 24.64 0 0 0 1.95-2.437 25.494 25.494 0 0 0 3.094-.469c.112.431.187.844.262 1.238Zm1.688-2.925c-.375.15-.788.28-1.2.393-.3-.937-.675-1.931-1.125-2.925.45-.994.843-1.969 1.125-2.906 2.587.75 4.143 1.875 4.143 2.925 0 .881-1.087 1.819-2.943 2.512Z"
              />
            </svg>
          ),
        },
        {
          name: 'React router',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#F44250"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="#F44250"
                  d="M26.57 16.434c-.684-.215-1.037-.143-1.753-.221-1.108-.121-1.55-.555-1.737-1.671-.105-.624.019-1.536-.249-2.101-.512-1.078-1.709-1.56-2.912-1.285-1.015.233-1.86 1.25-1.907 2.294-.054 1.191.624 2.208 1.788 2.559a8.02 8.02 0 0 0 1.718.293c1.059.078 1.14.668 1.427 1.153.18.306.355.608.355 1.52 0 .913-.176 1.214-.355 1.52-.287.484-.64.802-1.7.88a7.997 7.997 0 0 0-1.717.294c-1.164.352-1.842 1.367-1.788 2.559.046 1.043.892 2.06 1.907 2.293 1.203.277 2.4-.207 2.912-1.284.269-.565.416-1.205.52-1.828.19-1.117.63-1.55 1.738-1.672.716-.078 1.459 0 2.13-.382.71-.52 1.344-1.3 1.344-2.38 0-1.08-.683-2.213-1.721-2.54Z"
                />
                <path
                  fill="#fff"
                  d="M15.2 21.507a2.546 2.546 0 0 1 0-5.09 2.546 2.546 0 0 1 0 5.09Zm-4.672 5.173a2.545 2.545 0 0 1 .018-5.09 2.545 2.545 0 0 1-.018 5.09Zm18.846 0a2.547 2.547 0 0 1-2.556-2.526c-.008-1.404 1.124-2.557 2.517-2.564a2.546 2.546 0 0 1 .038 5.09Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M8 7h24v24H8z" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
        {
          name: 'NextJS',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#777"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="#0C1D1A"
                  d="M20 7C13.381 7 8 12.381 8 19s5.381 12 12 12c2.1 0 4.069-.544 5.775-1.481l-8.7-12.15v6.862H15.8v-9.394h1.275l9.469 14.213C29.825 26.913 32 23.219 32 19c0-6.619-5.381-12-12-12Zm4.144 15.863-1.406-2.12v-5.905h1.406v8.025Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M8 7h24v24H8z" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
        {
          name: 'Vite',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#8779FE"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="url(#b)"
                  d="m31.394 10.66-10.77 19.26a.585.585 0 0 1-1.02.004L8.62 10.662a.585.585 0 0 1 .611-.866l10.782 1.927c.069.012.14.012.208 0l10.556-1.924a.585.585 0 0 1 .617.861Z"
                />
                <path
                  fill="url(#c)"
                  d="m25.149 7.268-7.97 1.562a.293.293 0 0 0-.236.27l-.49 8.28a.292.292 0 0 0 .223.302c.044.011.09.011.134.001l2.22-.513a.292.292 0 0 1 .352.345l-.66 3.228a.293.293 0 0 0 .373.339l1.37-.417a.293.293 0 0 1 .372.34l-1.048 5.07c-.065.318.357.491.533.22l.117-.182 6.495-12.962a.293.293 0 0 0-.317-.42l-2.285.442a.292.292 0 0 1-.336-.368l1.49-5.168a.293.293 0 0 0-.337-.369Z"
                />
              </g>
              <defs>
                <linearGradient
                  id="b"
                  x1="8.351"
                  x2="21.756"
                  y1="9.107"
                  y2="27.313"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#41D1FF" />
                  <stop offset="1" stopColor="#BD34FE" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="19.394"
                  x2="21.819"
                  y1="7.692"
                  y2="24.327"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFEA83" />
                  <stop offset=".083" stopColor="#FFDD35" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <clipPath id="a">
                  <path fill="#fff" d="M8 7h24v24H8z" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
      ],
    },
  },

  {
    id: 2,
    backEnd: {
      title: 'Back-end',
      technologies: [
        {
          name: 'Nodejs',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#83CD29"
                fillOpacity=".33"
                rx="10"
              />
              <path
                fill="#83CD29"
                d="M20 29.5c-.283 0-.562-.074-.807-.216l-2.568-1.52c-.383-.215-.197-.29-.07-.335a5.125 5.125 0 0 0 1.162-.525.197.197 0 0 1 .191.015l1.973 1.172a.255.255 0 0 0 .239 0l7.695-4.442a.243.243 0 0 0 .118-.208v-8.885a.249.249 0 0 0-.12-.212L20.12 9.906a.242.242 0 0 0-.238 0l-7.69 4.44a.248.248 0 0 0-.122.21v8.881a.236.236 0 0 0 .12.205L14.3 24.86c1.144.572 1.844-.101 1.844-.778v-8.768a.225.225 0 0 1 .225-.225h.975a.225.225 0 0 1 .225.225v8.769c0 1.526-.83 2.4-2.278 2.4A3.293 3.293 0 0 1 13.518 26l-2.022-1.16a1.624 1.624 0 0 1-.807-1.404v-8.88a1.62 1.62 0 0 1 .807-1.407l7.696-4.443a1.684 1.684 0 0 1 1.616 0l7.695 4.443a1.625 1.625 0 0 1 .808 1.402v8.885a1.63 1.63 0 0 1-.808 1.404l-7.695 4.443A1.615 1.615 0 0 1 20 29.5Z"
              />
              <path
                fill="#83CD29"
                d="M18.54 20.465a.225.225 0 0 1 .226-.225h.995a.225.225 0 0 1 .221.188c.15 1.013.6 1.524 2.635 1.524 1.62 0 2.311-.367 2.311-1.227 0-.496-.195-.864-2.715-1.11-2.106-.21-3.408-.676-3.408-2.359 0-1.552 1.309-2.479 3.503-2.479 2.465 0 3.685.856 3.84 2.692a.225.225 0 0 1-.221.242h-1.003a.224.224 0 0 1-.215-.173c-.24-1.066-.825-1.407-2.4-1.407-1.77 0-1.976.617-1.976 1.079 0 .56.243.723 2.633 1.038 2.364.313 3.488.756 3.488 2.418 0 1.677-1.398 2.637-3.837 2.637-3.37.004-4.076-1.541-4.076-2.838Z"
              />
            </svg>
          ),
        },
        {
          name: 'GraphQL',
          svg: (
            <svg
              width="40"
              height="42"
              viewBox="0 0 40 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.5"
                width="40"
                height="41"
                rx="10"
                fill="#E535AB"
                fillOpacity="0.33"
              />
              <g clipPath="url(#clip0_73_40)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.304 10.5903L27.8488 13.7918C28.0089 13.6225 28.1926 13.4771 28.3942 13.3602C29.5442 12.6991 31.0109 13.0916 31.6789 14.2417C32.34 15.3917 31.9475 16.8584 30.7975 17.5264C30.5973 17.6416 30.3817 17.7275 30.1571 17.7814V24.1868C30.3792 24.2408 30.5925 24.3261 30.7906 24.4402C31.9475 25.1081 32.34 26.5749 31.672 27.725C31.0109 28.8749 29.5373 29.2674 28.3873 28.6064C28.1645 28.4786 27.9638 28.3156 27.7929 28.1239L22.2819 31.3057C22.3626 31.5501 22.4036 31.8059 22.4033 32.0632C22.4033 33.3854 21.3291 34.4666 20 34.4666C18.671 34.4666 17.5968 33.3922 17.5968 32.0632C17.5968 31.827 17.6307 31.5988 17.694 31.3833L12.1507 28.1827C11.9924 28.3487 11.8112 28.4914 11.6128 28.6064C10.4559 29.2674 8.98912 28.8749 8.328 27.725C7.66699 26.5749 8.05951 25.1081 9.20942 24.4402C9.40752 24.3261 9.62084 24.2407 9.84297 24.1868V17.7814C9.61839 17.7275 9.40272 17.6416 9.20258 17.5264C8.05257 16.8653 7.66005 15.3917 8.32116 14.2417C8.98227 13.0916 10.4558 12.6991 11.6058 13.3602C11.8064 13.4765 11.9892 13.6209 12.1486 13.7891L17.695 10.5867C17.6297 10.3648 17.5966 10.1346 17.5968 9.90328C17.5968 8.57438 18.671 7.5 20 7.5C21.3291 7.5 22.4033 8.57428 22.4033 9.90328C22.4033 10.1422 22.3686 10.3727 22.304 10.5903ZM21.7263 11.5767L27.2844 14.7858C27.1959 15.0952 27.1705 15.4192 27.2097 15.7386C27.249 16.058 27.352 16.3662 27.5128 16.6449C27.8512 17.2335 28.4023 17.6237 29.014 17.7758V24.1892C28.9828 24.1968 28.9518 24.2051 28.9209 24.2139L21.6617 11.6409C21.6837 11.6199 21.7052 11.5985 21.7263 11.5767ZM18.3398 11.6424L11.0807 24.2153C11.0493 24.2062 11.0178 24.1977 10.986 24.1899V17.7758C11.5978 17.6238 12.1489 17.2336 12.4872 16.645C12.6483 16.3657 12.7515 16.0569 12.7906 15.7368C12.8297 15.4168 12.8039 15.0922 12.7148 14.7823L18.2712 11.5742C18.2936 11.5973 18.3165 11.6202 18.3398 11.6424ZM20.6715 12.2119L27.929 24.7819C27.7627 24.9405 27.6202 25.1223 27.5059 25.3216C27.3918 25.5197 27.3065 25.733 27.2526 25.9552H12.7477C12.6936 25.733 12.6083 25.5197 12.4942 25.3216C12.3794 25.1237 12.2372 24.943 12.0717 24.785L19.3306 12.2124C19.5482 12.2751 19.7736 12.3068 20 12.3066C20.2332 12.3066 20.4585 12.2736 20.6715 12.2119ZM21.7773 30.4442L27.2993 27.2559C27.2827 27.2039 27.2679 27.1513 27.2549 27.0983H12.7446C12.7369 27.1294 12.7286 27.1604 12.7196 27.1912L18.2686 30.3952C18.4927 30.1621 18.7616 29.9769 19.0591 29.8505C19.3567 29.7242 19.6768 29.6594 20 29.66C20.3346 29.6594 20.6656 29.7289 20.9717 29.8639C21.2778 29.999 21.5522 30.1967 21.7773 30.4442Z"
                  fill="#E535AB"
                />
              </g>
              <defs>
                <clipPath id="clip0_73_40">
                  <rect
                    width="24"
                    height="27"
                    fill="white"
                    transform="translate(8 7.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          ),
        },
        {
          name: 'Strapi',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#4945FF"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="#4945FF"
                  d="M8 15.32c0-3.922 0-5.883 1.218-7.102C10.437 7 12.398 7 16.32 7h7.36c3.922 0 5.883 0 7.102 1.218C32 9.437 32 11.398 32 15.32v7.36c0 3.922 0 5.883-1.218 7.102C29.563 31 27.602 31 23.68 31h-7.36c-3.922 0-5.883 0-7.101-1.218C8 28.563 8 26.602 8 22.68v-7.36Z"
                />
                <path
                  fill="#fff"
                  d="M24.56 14.28h-8.08v4.12h4.12v4.12h4.12v-8.08a.16.16 0 0 0-.16-.16Z"
                />
                <path fill="#fff" d="M20.44 18.4h.16v.16h-.16v-.16Z" />
                <path
                  fill="#9593FF"
                  d="M16.48 18.4h3.96a.16.16 0 0 1 .16.16v3.96h-3.96a.16.16 0 0 1-.16-.16V18.4Zm4.12 4.12h4.12l-3.983 3.983a.08.08 0 0 1-.137-.056V22.52Zm-4.12-4.12h-3.927a.08.08 0 0 1-.057-.137l3.984-3.983v4.12Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M8 7h24v24H8z" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
      ],
    },
  },
  {
    id: 3,
    ControleVersao: {
      title: 'Controle de versão',
      technologies: [
        {
          name: 'Github',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#777"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="#252525"
                  fillRule="evenodd"
                  d="M20 7.957c-6.253 0-11.323 5.069-11.323 11.322 0 5.003 3.245 9.247 7.743 10.745.566.105.774-.246.774-.545 0-.27-.01-1.162-.015-2.108-3.15.685-3.815-1.336-3.815-1.336-.515-1.309-1.257-1.657-1.257-1.657-1.028-.702.077-.688.077-.688 1.137.08 1.736 1.167 1.736 1.167 1.01 1.73 2.649 1.23 3.295.941.101-.731.395-1.231.719-1.514-2.515-.286-5.16-1.257-5.16-5.595 0-1.237.443-2.247 1.168-3.04-.118-.285-.506-1.436.109-2.996 0 0 .95-.304 3.114 1.16A10.851 10.851 0 0 1 20 13.432c.962.004 1.931.13 2.836.381 2.161-1.465 3.11-1.16 3.11-1.16.617 1.559.23 2.71.112 2.996.726.793 1.165 1.803 1.165 3.04 0 4.348-2.648 5.305-5.17 5.586.407.351.768 1.04.768 2.097 0 1.515-.013 2.734-.013 3.107 0 .301.204.654.778.543 4.496-1.499 7.737-5.741 7.737-10.742 0-6.254-5.07-11.323-11.323-11.323Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#FAFAFF"
                  d="M12.966 24.214c-.025.056-.114.073-.194.034-.083-.037-.129-.113-.102-.17.024-.058.113-.074.195-.035.082.037.13.114.1.17Zm.458.511c-.053.05-.159.027-.23-.052-.075-.079-.089-.184-.034-.235.056-.05.159-.027.233.052.074.08.088.185.032.236Zm.447.652c-.07.049-.183.003-.253-.097-.07-.101-.07-.222.002-.27.07-.049.182-.005.253.095.069.102.069.223-.002.272Zm.611.63c-.061.069-.194.05-.29-.043-.1-.091-.127-.221-.065-.29.063-.068.196-.049.293.044.1.091.129.221.063.29Zm.844.366c-.027.089-.155.13-.283.091-.128-.038-.212-.142-.185-.232.026-.09.154-.131.283-.09.128.038.212.141.185.231Zm.927.068c.003.093-.105.17-.24.172-.136.004-.245-.072-.247-.164 0-.094.107-.17.242-.173.135-.003.245.072.245.165Zm.862-.147c.016.091-.077.185-.211.21-.131.024-.253-.033-.27-.123-.016-.093.08-.187.21-.21.134-.024.254.03.271.123Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M8 7h24v24H8z" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
        {
          name: 'Git',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#F34F29"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="#F34F29"
                  d="M31.388 17.946 21.054 7.612a1.524 1.524 0 0 0-2.156 0l-2.145 2.146 2.722 2.722a1.81 1.81 0 0 1 2.292 2.308l2.623 2.623a1.813 1.813 0 1 1-.692 2.995 1.815 1.815 0 0 1-.394-1.972l-2.446-2.447v6.44a1.814 1.814 0 1 1-1.491-.053v-6.5a1.813 1.813 0 0 1-.984-2.379l-2.685-2.683-7.086 7.086a1.525 1.525 0 0 0 0 2.156l10.334 10.334c.596.595 1.56.595 2.156 0l10.286-10.286a1.525 1.525 0 0 0 0-2.156Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M8 7h24v24H8z" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
        {
          name: 'Gitlab',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#E24329"
                fillOpacity=".33"
                rx="10"
              />
              <g clipPath="url(#a)">
                <path
                  fill="#E24329"
                  d="m31.392 16.634-.034-.085-3.207-8.371a.836.836 0 0 0-.83-.526.859.859 0 0 0-.482.18.858.858 0 0 0-.285.433l-2.166 6.627h-8.77l-2.166-6.627a.843.843 0 0 0-.285-.433.859.859 0 0 0-.982-.053.844.844 0 0 0-.33.398l-3.213 8.367-.032.085a5.956 5.956 0 0 0 1.975 6.884l.011.01.03.02 4.886 3.66 2.418 1.829 1.472 1.112a.99.99 0 0 0 1.198 0l1.473-1.112 2.417-1.83 4.916-3.681.012-.01a5.959 5.959 0 0 0 1.974-6.877Z"
                />
                <path
                  fill="#FC6D26"
                  d="m31.392 16.634-.034-.085c-1.563.321-3.035.983-4.313 1.94L20 23.814l4.488 3.392 4.916-3.681.012-.01a5.96 5.96 0 0 0 1.976-6.882Z"
                />
                <path
                  fill="#FCA326"
                  d="m15.512 27.207 2.418 1.83 1.472 1.112a.991.991 0 0 0 1.198 0l1.473-1.112 2.417-1.83S22.4 25.625 20 23.815c-1.497 1.13-2.993 2.26-4.488 3.392Z"
                />
                <path
                  fill="#FC6D26"
                  d="M12.954 18.488a10.824 10.824 0 0 0-4.312-1.944l-.032.085a5.957 5.957 0 0 0 1.975 6.884l.011.01.03.02 4.886 3.66L20 23.81l-7.046-5.322Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M8 7h24v24H8z" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
      ],
    },
  },
  {
    id: 4,
    Estrutura: {
      title: 'Infraestrutura',
      technologies: [
        {
          name: 'Cloudflare',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#F38020"
                fillOpacity=".33"
                rx="10"
              />
              <path
                fill="#fff"
                d="m29.69 19.991-2.924-1.676-.504-.218-11.959.082v6.071H29.69v-4.259Z"
              />
              <path
                fill="#F38020"
                d="M24.368 23.692c.143-.491.088-.94-.15-1.275-.218-.306-.586-.483-1.03-.504l-8.387-.109a.155.155 0 0 1-.13-.068.187.187 0 0 1-.02-.15.23.23 0 0 1 .197-.15l8.463-.109c1.002-.047 2.092-.858 2.474-1.853l.484-1.26a.272.272 0 0 0 .013-.164 5.512 5.512 0 0 0-10.596-.566A2.503 2.503 0 0 0 13.95 17a2.482 2.482 0 0 0-2.153 3.08 3.52 3.52 0 0 0-3.421 3.523c0 .17.014.34.034.511a.168.168 0 0 0 .164.143h15.482a.21.21 0 0 0 .197-.15l.116-.415Z"
              />
              <path
                fill="#FAAE40"
                d="M27.04 18.302c-.076 0-.158 0-.233.006-.054 0-.102.041-.122.096l-.327 1.138c-.143.49-.089.94.15 1.274.218.306.586.484 1.029.504l1.785.11c.055 0 .102.026.13.067.027.041.034.102.02.15a.23.23 0 0 1-.198.15l-1.86.11c-1.009.047-2.092.858-2.474 1.853l-.136.347c-.027.068.02.136.095.136h6.392a.167.167 0 0 0 .164-.122 4.59 4.59 0 0 0-4.415-5.82Z"
              />
            </svg>
          ),
        },
        {
          name: 'Firebase',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#FCCA3F"
                fillOpacity=".33"
                rx="10"
              />
              <path
                fill="#FFC24A"
                d="m12.35 25.45.127-.178 6.015-11.41.013-.121-2.651-4.98a.492.492 0 0 0-.92.155L12.35 25.45Z"
              />
              <path
                fill="#FFA712"
                d="m12.425 25.315.096-.188 5.953-11.291-2.645-5a.45.45 0 0 0-.85.155l-2.554 16.324Z"
              />
              <path
                fill="#F4BD62"
                d="m20.438 17.508 1.974-2.025-1.975-3.766a.508.508 0 0 0-.896 0l-1.055 2.011v.172l1.952 3.607Z"
              />
              <path
                fill="#FFA50E"
                d="m20.403 17.425 1.919-1.965-1.92-3.66a.441.441 0 0 0-.805-.035l-1.06 2.046-.032.105 1.898 3.509Z"
              />
              <path
                fill="#F6820C"
                d="m12.351 25.45.058-.058.21-.084 7.694-7.667.098-.265-1.92-3.659-6.14 11.734Z"
              />
              <path
                fill="#FDE068"
                d="m20.684 29.317 6.966-3.884-1.99-12.248a.477.477 0 0 0-.807-.26L12.35 25.45l6.925 3.866a1.445 1.445 0 0 0 1.408 0"
              />
              <path
                fill="#FCCA3F"
                d="m27.586 25.4-1.974-12.155a.418.418 0 0 0-.725-.265L12.425 25.427l6.848 3.825a1.434 1.434 0 0 0 1.398 0l6.915-3.851Z"
              />
              <path
                fill="#EEAB37"
                d="M20.684 29.2a1.446 1.446 0 0 1-1.409 0l-6.868-3.808-.057.058 6.925 3.866a1.446 1.446 0 0 0 1.408 0l6.967-3.883-.017-.105-6.949 3.872Z"
              />
            </svg>
          ),
        },
        {
          name: 'Vercel',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              fill="none"
            >
              <rect
                width="40"
                height="38"
                fill="#777"
                fillOpacity=".33"
                rx="10"
              />
              <path
                fill="#252525"
                d="M19.997 10.222 31.993 31H8l11.997-20.778Z"
              />
            </svg>
          ),
        },
      ],
    },
  },
];

export default Techs;
