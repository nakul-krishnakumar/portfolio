const MeshGradientBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-full">
            <div className="absolute inset-0 bg-[hsla(257,89%,3%,1)]" style={{
                backgroundImage: `
                    radial-gradient(at 68% 4%, hsla(240,43%,43%,0.96) 0px, transparent 50%),
                    radial-gradient(at 100% 65%, hsla(240,100%,70%,0.88) 0px, transparent 50%),
                    radial-gradient(at 100% 17%, hsla(108,34%,56%,1) 0px, transparent 50%),
                    radial-gradient(at 94% 37%, hsla(200,61%,63%,1) 0px, transparent 50%)`,
                filter: 'blur(80px)',
            }} />
        </div>
    );
}

export default MeshGradientBackground;