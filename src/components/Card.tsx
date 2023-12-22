import Image from "next/image";
import darkMode from "../../public/assets/darkMode.svg";
import circleFill from "../../public/assets/circleFill.svg";
export const card = () => {
    return (
        <>
            {/* Cards: Simple with Actions */}
            <div className="flex flex-col overflow-hidden border rounded-lg m-5 bg-white shadow-xl dark:bg-gray-800 dark:text-gray-100">
                {/* Card Header */}
                <div className="flex items-center justify-between space-x-2 bg-gray-50 px-5 py-4 dark:bg-gray-700/50">
                    <h3 className="font-medium">CAM-1</h3>
                    <div className="-my-4">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center space-x-2"
                        >
                            <div className="inline-flex size-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-500">
                                JD
                            </div>
                        </button>
                    </div>
                </div>
                {/* END Card Header */}

                {/* Card Body */}
                <div className="flex flex-row justify-center items-center grow">
                    <div className="flex">
                        <Image className="flex size-4 m-3" alt="" src={darkMode} />
                    </div>

                    <span className="flex grow p-3" >You can easily add your actions in the card header section.</span>

                </div>
                {/* END Card Body */}

                {/* Card Footer */}
                <div className="flex  flex-row  px-2 py-4  dark:bg-gray-700/50 dark:text-gray-400">

                    <div className="flex  border rounded-md  px-1 items-center">
                        
                        <Image className="flex size-3 mr-3 items fill-gray-600" alt="" src={circleFill}/>
                        
                        <div className="flex text-sm text-gray-500">Feature Request</div>
                    </div>
                </div>
                {/* END Card Footer */}
            </div>
            {/* END Cards: Simple with Actions */}
        </>
    );
}
