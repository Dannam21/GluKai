type Props = {
  step: 1 | 2 | 3
}

export function AuthStepper({ step }: Props) {
  return (
    <div className="mx-auto flex max-w-sm items-center justify-center gap-4 pt-8" aria-label={`Paso ${step} de 3`}>
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex items-center gap-4">
          <span className={`grid h-10 w-10 place-items-center rounded-full text-sm font-extrabold shadow-sm transition ${item <= step ? 'bg-[#1677FF] text-white shadow-[0_8px_18px_rgba(22,119,255,0.22)]' : 'bg-[#DCE9F8] text-[#526C98]'}`}>
            {item}
          </span>
          {item < 3 && <span className="h-1 w-20 rounded-full bg-[#DCE9F8]"><span className={`block h-full rounded-full ${item < step ? 'bg-[#1677FF]' : 'bg-transparent'}`} /></span>}
        </div>
      ))}
    </div>
  )
}
